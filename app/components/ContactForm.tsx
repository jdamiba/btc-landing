"use client";
import { useState, useEffect } from "react";

const LOCKOUT_KEY = "btc_contact_form_last_submit";
const LOCKOUT_HOURS = 48;

function getLockoutExpiry() {
  const last = localStorage.getItem(LOCKOUT_KEY);
  return last ? new Date(parseInt(last, 10)) : null;
}

function isLockedOut() {
  const expiry = getLockoutExpiry();
  if (!expiry) return false;
  const now = new Date();
  return now < expiry;
}

function getTimeLeft() {
  const expiry = getLockoutExpiry();
  if (!expiry) return 0;
  const now = new Date();
  return Math.max(0, expiry.getTime() - now.getTime());
}

export default function ContactForm() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    inquiryType: "",
    message: "",
  });
  const [status, setStatus] = useState("");
  const [errors, setErrors] = useState({
    name: "",
    email: "",
    inquiryType: "",
    message: "",
  });
  const [lockedOut, setLockedOut] = useState(false);
  const [timeLeft, setTimeLeft] = useState(0);

  useEffect(() => {
    // Check lockout on mount
    if (typeof window !== "undefined") {
      const locked = isLockedOut();
      setLockedOut(locked);
      setTimeLeft(getTimeLeft());
      if (locked) {
        // Update countdown every minute
        const interval = setInterval(() => {
          setTimeLeft(getTimeLeft());
          if (!isLockedOut()) {
            setLockedOut(false);
            clearInterval(interval);
          }
        }, 60000);
        return () => clearInterval(interval);
      }
    }
  }, []);

  const validateForm = () => {
    let valid = true;
    const newErrors = {
      name: "",
      email: "",
      inquiryType: "",
      message: "",
    };
    if (!form.name.trim()) {
      newErrors.name = "Name is required";
      valid = false;
    }
    if (!form.email.trim()) {
      newErrors.email = "Email is required";
      valid = false;
    } else if (!/\S+@\S+\.\S+/.test(form.email)) {
      newErrors.email = "Please enter a valid email address";
      valid = false;
    }
    if (!form.inquiryType) {
      newErrors.inquiryType = "Please select an inquiry type";
      valid = false;
    }
    if (!form.message.trim()) {
      newErrors.message = "Message is required";
      valid = false;
    }
    setErrors(newErrors);
    return valid;
  };

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    if (lockedOut) return;
    if (!validateForm()) {
      return;
    }
    setStatus("Sending...");
    const res = await fetch("/api/contact", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(form),
    });
    if (res.ok) {
      setStatus("Message sent!");
      setForm({ name: "", email: "", inquiryType: "", message: "" });
      setErrors({ name: "", email: "", inquiryType: "", message: "" });
      // Set lockout expiry in localStorage
      const expiry = new Date();
      expiry.setHours(expiry.getHours() + LOCKOUT_HOURS);
      localStorage.setItem(LOCKOUT_KEY, expiry.getTime().toString());
      setLockedOut(true);
      setTimeLeft(LOCKOUT_HOURS * 60 * 60 * 1000);
    } else {
      setStatus("Error sending message.");
    }
  }

  // Helper to format time left
  function formatTimeLeft(ms: number) {
    const hours = Math.floor(ms / (1000 * 60 * 60));
    const minutes = Math.floor((ms % (1000 * 60 * 60)) / (1000 * 60));
    if (hours > 0) {
      return `${hours} hour${hours > 1 ? "s" : ""} ${minutes} min${minutes !== 1 ? "s" : ""}`;
    }
    return `${minutes} min${minutes !== 1 ? "s" : ""}`;
  }

  return (
    <div className="flex flex-col w-full mx-auto px-4 md:px-8 py-12 gap-8 border-t-5 mt-[50px]">
      <div>
        <h1 className="text-[67px] font-bold mb-8">CONTACT</h1>
      </div>
      {lockedOut ? (
        <div className="max-w-2xl mx-auto w-full bg-yellow-100 border border-yellow-400 text-yellow-800 p-6 rounded-md text-center text-lg">
          You have already sent a message. You can send another message in{" "}
          {formatTimeLeft(timeLeft)}.
        </div>
      ) : (
        <form
          onSubmit={handleSubmit}
          className="flex flex-col gap-6 max-w-2xl mx-auto w-full"
        >
          <div className="flex flex-col md:flex-row gap-6">
            <div className="flex-1">
              <input
                type="text"
                placeholder="Your Name"
                value={form.name}
                onChange={(e) => {
                  setForm((f) => ({ ...f, name: e.target.value }));
                  if (errors.name) setErrors((e) => ({ ...e, name: "" }));
                }}
                required
                className={`w-full border-2 ${errors.name ? "border-red-500" : "border-gray-300"} p-4 rounded-md focus:outline-none focus:ring-2 focus:ring-black focus:border-transparent text-lg`}
                disabled={lockedOut}
              />
              {errors.name && (
                <p className="text-red-500 mt-1 text-sm">{errors.name}</p>
              )}
            </div>
            <div className="flex-1">
              <input
                type="email"
                placeholder="Your Email"
                value={form.email}
                onChange={(e) => {
                  setForm((f) => ({ ...f, email: e.target.value }));
                  if (errors.email) setErrors((e) => ({ ...e, email: "" }));
                }}
                required
                className={`w-full border-2 ${errors.email ? "border-red-500" : "border-gray-300"} p-4 rounded-md focus:outline-none focus:ring-2 focus:ring-black focus:border-transparent text-lg`}
                disabled={lockedOut}
              />
              {errors.email && (
                <p className="text-red-500 mt-1 text-sm">{errors.email}</p>
              )}
            </div>
          </div>
          <div>
            <select
              value={form.inquiryType}
              onChange={(e) => {
                setForm((f) => ({ ...f, inquiryType: e.target.value }));
                if (errors.inquiryType)
                  setErrors((e) => ({ ...e, inquiryType: "" }));
              }}
              required
              className={`w-full border-2 ${errors.inquiryType ? "border-red-500" : "border-gray-300"} p-4 rounded-md focus:outline-none focus:ring-2 focus:ring-black focus:border-transparent text-lg appearance-none bg-white`}
              disabled={lockedOut}
            >
              <option value="" disabled>
                Select Inquiry Type
              </option>
              <option value="Speaking Engagements">Speaking Engagements</option>
              <option value="Merch Order Questions">
                Merch Order Questions
              </option>
            </select>
            {errors.inquiryType && (
              <p className="text-red-500 mt-1 text-sm">{errors.inquiryType}</p>
            )}
          </div>
          <div>
            <textarea
              placeholder="Your Message"
              value={form.message}
              onChange={(e) => {
                setForm((f) => ({ ...f, message: e.target.value }));
                if (errors.message) setErrors((e) => ({ ...e, message: "" }));
              }}
              required
              rows={6}
              className={`w-full border-2 ${errors.message ? "border-red-500" : "border-gray-300"} p-4 rounded-md focus:outline-none focus:ring-2 focus:ring-black focus:border-transparent text-lg`}
              disabled={lockedOut}
            />
            {errors.message && (
              <p className="text-red-500 mt-1 text-sm">{errors.message}</p>
            )}
          </div>
          <div className="flex items-center justify-between">
            <button
              type="submit"
              className="bg-black text-white px-8 py-4 rounded-md text-lg font-semibold hover:bg-gray-800 transition-colors"
              disabled={lockedOut}
            >
              SEND MESSAGE
            </button>
            {status && <p className="text-lg font-medium">{status}</p>}
          </div>
        </form>
      )}
    </div>
  );
}
