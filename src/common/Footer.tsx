// components/Footer.tsx
"use client";

import { FaLinkedinIn, FaFacebookF, FaInstagram } from "react-icons/fa";
import Image from "next/image";

export default function Footer() {
  return (
    <footer className="bg-[#0f2529] text-white py-12">
      <div className="container max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-3 gap-10">
        {/* Left Section */}
        <div>
          <h2 className="text-2xl font-bold">
            Quorz Recruitment <span className="text-red-500">®</span>
          </h2>
          <p className="text-sm text-red-400 mt-2">
            We find exceptional talent for your company
          </p>

          <div className="mt-6">
            <Image
              src="/Recruitment4u.svg"
              alt="Quorz Recruitment"
              width={150}
              height={150}
              className="h-16"
            />
          </div>

          {/* Social icons */}
          <div className="flex space-x-3 mt-6">
            <a
              href="#"
              className="p-2 border border-white hover:bg-white hover:text-black transition rounded">
              <FaLinkedinIn />
            </a>
            <a
              href="#"
              className="p-2 border border-white hover:bg-white hover:text-black transition rounded">
              <FaFacebookF />
            </a>
            <a
              href="#"
              className="p-2 border border-white hover:bg-white hover:text-black transition rounded">
              <FaInstagram />
            </a>
          </div>
        </div>

        {/* Middle Section */}
        <div>
          <h3 className="text-lg font-bold mb-3">Contact us</h3>
          <p className="flex items-center gap-2 mb-2">
            {/* 📞 <span>+421 902 933 101</span> */}
          </p>
          <p className="flex items-center gap-2">
            📧{" "}
            <a href="mailto:client@aujobs.sk" className="hover:underline">
              quorz.recruitment@gmail.com
            </a>
          </p>
        </div>

        {/* Right Section */}
        <div>
          <h3 className="text-lg font-bold mb-3">Links</h3>
          <ul className="space-y-2">
            <li>
              <a href="#" className="hover:text-red-400">
                Home
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-red-400">
                Employers
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-red-400">
                Applicants
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-red-400">
                About Us
              </a>
            </li>
          </ul>
        </div>
      </div>

      {/* Bottom Section */}
      <div className="border-t border-gray-600 mt-10 pt-6 text-sm text-gray-400 text-center md:text-left container max-w-7xl mx-auto px-6 flex flex-col md:flex-row justify-between">
        <p>
          Recruitment agency by{" "}
          <a href="#" className="hover:underline text-white">
            Xyz Recruitment
          </a>
        </p>
        <p>Copyright © 2025 Xyz Recruitment</p>
        {/* <div className="flex gap-4 justify-center md:justify-end mt-4 md:mt-0">
          <a href="#" className="hover:underline">
            Privacy Policy
          </a>
          <a href="#" className="hover:underline">
            Cookies
          </a>
          <a href="#" className="hover:underline">
            Terms and Conditions
          </a>
        </div> */}
      </div>
    </footer>
  );
}
