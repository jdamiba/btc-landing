import { NextResponse } from "next/server";
import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(req: Request) {
  const { name, email, inquiryType, message } = await req.json();

  try {
    await resend.emails.send({
      from: "Website Contact <brian@briantylercohen.com>",
      to: process.env.CONTACT_TO_EMAIL!,
      subject: `New Contact Form Submission from ${name}: ${inquiryType}`,
      replyTo: email,
      text: `Name: ${name}\nEmail: ${email}\nInquiry Type: ${inquiryType}\n\n${message}`,
    });

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error(error);
    return NextResponse.json(
      { error: "Failed to send email." },
      { status: 500 }
    );
  }
}
