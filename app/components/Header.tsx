"use client";
import Link from "next/link";
import React, { useState } from "react";

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="w-full bg-white border-b border-gray-200">
      <div className="relative flex items-center justify-between max-w-7xl mx-auto w-full px-4 md:px-8 py-2 md:py-4">
        {/* Logo Section */}
        <div className="flex items-center">
          {/* Placeholder for SVG Logo */}
          <div className="flex items-center justify-center bg-gray-100 rounded">
            <svg
              width="100"
              height="70"
              viewBox="0 0 99 66"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M0 0V65.1526H98.0282V0H0Z" fill="black" />
              <path
                d="M56.743 18.9064H41.2743C41.1428 18.9064 41.0338 18.9511 40.9415 19.0434C40.8492 19.1357 40.8044 19.2448 40.8044 19.3763V23.1658C40.8044 23.2973 40.8492 23.4063 40.9415 23.4986C41.0338 23.5909 41.1428 23.6357 41.2743 23.6357H45.9616C46.0931 23.6357 46.1574 23.7 46.1574 23.8314V45.783C46.1574 45.9144 46.2021 46.0235 46.2944 46.1158C46.3867 46.2081 46.4958 46.2528 46.6272 46.2528H51.1971C51.3257 46.2528 51.4376 46.2081 51.5299 46.1158C51.6222 46.0263 51.6669 45.9144 51.6669 45.783V23.8314C51.6669 23.7028 51.7313 23.6357 51.8627 23.6357H56.7458C56.8745 23.6357 56.9863 23.5909 57.0786 23.4986C57.1681 23.4091 57.2157 23.2973 57.2157 23.1658V19.3763C57.2157 19.2476 57.1709 19.1357 57.0786 19.0434C56.9863 18.9511 56.8773 18.9064 56.7458 18.9064"
                fill="white"
              />
              <path
                d="M32.2127 32.2244C32.1344 32.1461 32.1484 32.0678 32.2519 31.9895C34.0222 30.8177 34.9088 28.9439 34.9088 26.3653C34.9088 23.7867 34.1732 22.0304 32.7021 20.7802C31.2311 19.5301 29.1922 18.9064 26.5885 18.9064H19.3729C19.2415 18.9064 19.1324 18.9511 19.0401 19.0434C18.9478 19.1357 18.9031 19.2448 18.9031 19.3763V45.783C18.9031 45.9144 18.9478 46.0235 19.0401 46.1158C19.1324 46.2081 19.2415 46.2528 19.3729 46.2528H27.4471C29.7656 46.2528 31.6534 45.6012 33.1105 44.3007C34.5676 43.0002 35.2975 41.1376 35.2975 38.7156C35.2975 35.8518 34.2683 33.6899 32.2127 32.2328V32.2244ZM24.4126 23.8259C24.4126 23.6972 24.477 23.6301 24.6084 23.6301H26.706C27.6177 23.6301 28.3141 23.9181 28.7951 24.4887C29.2762 25.062 29.5167 25.8814 29.5167 26.9498C29.5167 28.0182 29.2678 28.7537 28.7755 29.313C28.2805 29.8724 27.5897 30.1521 26.706 30.1521H24.6084C24.477 30.1521 24.4126 30.0877 24.4126 29.9563V23.8231V23.8259ZM29.0496 40.5447C28.5546 41.1684 27.8778 41.4816 27.0192 41.4816H24.6084C24.477 41.4816 24.4126 41.4173 24.4126 41.2858V34.3332C24.4126 34.2017 24.477 34.1374 24.6084 34.1374H27.0583C27.8918 34.1374 28.5546 34.4758 29.0496 35.1526C29.5446 35.8294 29.7907 36.7412 29.7907 37.8878C29.7907 39.0345 29.5418 39.9182 29.0496 40.5447Z"
                fill="white"
              />
              <path
                d="M74.0853 27.304L78.6551 27.1082C78.7838 27.1082 78.8957 27.0635 78.9879 26.9712C79.0774 26.8789 79.125 26.7698 79.125 26.6384V26.2077C79.125 23.8892 78.4146 22.0405 76.9967 20.6618C75.5815 19.2858 73.6937 18.595 71.3333 18.5922H70.4943C68.1506 18.5922 66.2684 19.283 64.8505 20.6618C63.4297 22.0433 62.7222 23.892 62.7222 26.2077V38.8629C62.7222 41.2065 63.4325 43.0748 64.8505 44.4675C66.2684 45.8603 68.1506 46.5567 70.4943 46.5567C70.4999 46.5567 70.5083 46.5567 70.5139 46.5567H71.3333C73.6686 46.5539 75.548 45.8575 76.9771 44.4675C78.409 43.0748 79.125 41.2065 79.125 38.8629V38.4713C79.125 38.3427 79.0802 38.2308 78.9879 38.1385C78.8957 38.0462 78.7866 38.0015 78.6551 38.0015L74.0853 37.8057C73.9538 37.8057 73.8448 37.8505 73.7525 37.9428C73.6602 38.0351 73.6154 38.1441 73.6154 38.2756V39.3299C73.6154 40.0851 73.4057 40.6919 72.9918 41.145C72.5778 41.5953 72.0241 41.8246 71.3305 41.8274H70.5111C70.5055 41.8274 70.4971 41.8274 70.4915 41.8274C69.8147 41.8274 69.2665 41.6009 68.8498 41.145C68.4331 40.6891 68.2261 40.0851 68.2261 39.3299V25.8525C68.2261 25.0974 68.4331 24.4849 68.8498 24.0178C69.2665 23.548 69.8119 23.3159 70.4915 23.3159C70.4971 23.3159 70.5055 23.3159 70.5111 23.3159H71.3305C72.0241 23.3215 72.5778 23.5536 72.9918 24.0178C73.4085 24.4877 73.6154 25.1002 73.6154 25.8525V26.8677C73.6154 27.1558 73.772 27.2984 74.0853 27.2984V27.304Z"
                fill="white"
              />
            </svg>
          </div>
        </div>
        {/* Hamburger for mobile */}
        <button
          className="md:hidden flex items-center justify-center p-2 ml-auto"
          aria-label="Open menu"
          onClick={() => setMenuOpen((open) => !open)}
        >
          <svg
            width="32"
            height="32"
            viewBox="0 0 32 32"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <rect y="7" width="32" height="3" rx="1.5" fill="#222" />
            <rect y="15" width="32" height="3" rx="1.5" fill="#222" />
            <rect y="23" width="32" height="3" rx="1.5" fill="#222" />
          </svg>
        </button>
        {/* Navigation Links */}
        <nav
          className={`${
            menuOpen
              ? "flex flex-col absolute top-full left-0 w-full bg-white border-b border-gray-200 z-50 shadow-xl animate-slideDown md:static md:flex-row md:w-auto md:bg-transparent md:border-0 md:shadow-none"
              : "hidden md:flex md:flex-row md:w-auto"
          } gap-2 md:gap-6 text-base md:text-lg font-medium items-center transition-all duration-200`}
        >
          {/* Close button for mobile menu */}
          <button
            className="self-end md:hidden p-2 mr-2 mt-2 text-2xl text-gray-500 hover:text-black focus:outline-none"
            aria-label="Close menu"
            onClick={() => setMenuOpen(false)}
          >
            &times;
          </button>
          <Link
            href="/"
            className="hover:text-blue-600 transition px-4 py-3 rounded-md w-full text-left md:w-auto md:text-center md:p-0 md:rounded-none"
          >
            Home
          </Link>
          <a
            href="https://www.youtube.com/briantylercohen"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-blue-600 transition px-4 py-3 rounded-md w-full text-left md:w-auto md:text-center md:p-0 md:rounded-none"
          >
            YouTube
          </a>
          <a
            href="#merch"
            className="hover:text-blue-600 transition px-4 py-3 rounded-md w-full text-left md:w-auto md:text-center md:p-0 md:rounded-none"
          >
            Merch
          </a>
          <a
            href="https://art19.com/shows/no-lie"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-blue-600 transition px-4 py-3 rounded-md w-full text-left md:w-auto md:text-center md:p-0 md:rounded-none"
          >
            Podcast
          </a>
          <a
            href="#socials"
            className="hover:text-blue-600 transition px-4 py-3 rounded-md w-full text-left md:w-auto md:text-center md:p-0 md:rounded-none"
          >
            Socials
          </a>
          <a
            href="https://plus.briantylercohen.com/subscribe"
            className="hover:text-blue-600 transition px-4 py-3 rounded-md w-full text-left md:w-auto md:text-center md:p-0 md:rounded-none"
          >
            Sign Up
          </a>
        </nav>
      </div>
      {/* Slide down animation for mobile menu */}
      <style jsx>{`
        @keyframes slideDown {
          0% {
            opacity: 0;
            transform: translateY(-16px);
          }
          100% {
            opacity: 1;
            transform: translateY(0);
          }
        }
        .animate-slideDown {
          animation: slideDown 0.25s ease;
        }
      `}</style>
    </header>
  );
}
