// components/Footer.tsx
"use client";

import Image from "next/image";

export default function Footer() {
  return (
    <footer className="bg-[#0f2529] text-white py-12">
      <div className="container  mx-auto px-6 grid grid-cols-1 md:grid-cols-4 gap-10">
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
          {/* <div className="flex space-x-3 mt-6">
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
          </div> */}
        </div>

        {/* Middle Section */}
        <div className="">
          <h3 className="text-lg font-bold mb-3">Contact us</h3>
          <p className="flex items-center gap-2 mb-2">
            📞 <span>+40 784 805 998</span>
          </p>
          <p className="flex items-center gap-2">
            📧{" "}
            <a
              href="mailto:quorz.recruitment@gmail.com"
              className="hover:underline">
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
        {/* Middle Section */}
        <div className="space-y-5">
          <h3 className="text-lg font-bold mb-3">Office</h3>
          <div className="space-y-3">
            <h4 className="text-[20px]">Romania</h4>
            <p className="flex items-center gap-2">
              <a
                href="https://www.google.com/maps/search/Str.+Sg.+Constantin+Moise+5+D+BUCURESTI,+Loc.+SECTORUL+6/@44.4294868,26.0369059,17z/data=!3m1!4b1?entry=ttu&g_ep=EgoyMDI1MDQwMi4xIKXMDSoASAFQAw%3D%3D"
                target="_blank"
                rel="noopener noreferrer"
                className="text-[12px] hover:text-primary">
                Str. Sg. Constantin Moise 5 D, SECTORUL 6, BUCHAREST
              </a>
            </p>
          </div>
          <div className="space-y-3">
            <h4 className="text-[20px]">UAE [Dubai]</h4>
            <p className="flex items-center gap-2">
              <a
                href="https://www.google.com/maps/place/The+One+Tower/@25.101272,55.1712551,17z/data=!3m2!4b1!5s0x3e5f6823542b71c7:0x8e9faf5dcfac2cda!4m6!3m5!1s0x3e5f6b717800ddc9:0x80e8763d2c32aea7!8m2!3d25.1012672!4d55.17383!16s%2Fm%2F043sbt6?entry=ttu&g_ep=EgoyMDI1MDQwMi4xIKXMDSoASAFQAw%3D%3D"
                target="_blank"
                rel="noopener noreferrer"
                className="text-[12px] hover:text-primary">
                The One Tower, Fl.24, DUBAI, UAE
              </a>
            </p>
          </div>
          <div className="space-y-3">
            <h4 className="text-[20px]">Dhaka</h4>
            <p className="flex items-center gap-2">
              <a
                href="https://www.google.com/maps/search/Road+Number+12,+Sector+:+6+,+Uttara+,Dhaka+-1230+Bangladesh/@23.8673376,90.3876689,16z/data=!3m1!4b1?entry=ttu&g_ep=EgoyMDI1MDgxOS4wIKXMDSoASAFQAw%3D%3D"
                target="_blank"
                rel="noopener noreferrer"
                className="text-[12px] hover:text-primary">
                Road Number 12, Sector : 6 , Uttara ,Dhaka -1230 Bangladesh
              </a>
            </p>
          </div>
        </div>
      </div>

      {/* Bottom Section */}
      <div className="border-t border-gray-600 mt-10 pt-6 text-sm text-gray-400 text-center md:text-left container max-w-7xl mx-auto px-6 flex flex-col md:flex-row justify-between">
        <p>
          Recruitment agency by{" "}
          <a href="#" className="hover:underline text-white">
            Quorz Recruitment
          </a>
        </p>
        <p>Copyright © 2025 Quorz Recruitment</p>
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
