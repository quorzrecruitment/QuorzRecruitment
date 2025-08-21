"use client";
import React, { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { HiMenu, HiX } from "react-icons/hi";
import { usePathname } from "next/navigation"; // ✅ import

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const pathname = usePathname(); // ✅ get current route

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navItems = [
    { href: "/", label: "Home" },
    { href: "/employers", label: " Employers" },
    { href: "/applicants", label: "Applicants" },
    { href: "/about", label: "About Us" },
  ];

  return (
    <motion.header
      initial={{ y: -80, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.5 }}
      className={`fixed top-0 w-full z-50 transition-colors duration-300 ${
        isScrolled ? "bg-white shadow-md" : "bg-[#F4F4F2]"
      }`}>
      <div className="container mx-auto flex items-center justify-between py-3 px-4">
        {/* Logo */}
        <Link href="/" className="flex items-center gap-2">
          <Image
            src="/Recruitment4u.svg"
            alt="AuJob"
            width={140}
            height={40}
            priority
          />
        </Link>

        {/* Desktop Menu */}
        <nav className="hidden md:flex items-center gap-6">
          {navItems.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className={`font-medium transition-colors ${
                pathname === item.href
                  ? "text-red-600 font-semibold" // ✅ active link
                  : "text-gray-800 hover:text-red-600"
              }`}>
              {item.label}
            </Link>
          ))}
        </nav>

        {/* Call Button */}
        <a
          href="tel:+421902933101"
          className="hidden md:inline-block bg-red-600 text-white font-bold px-5 py-2 rounded-full hover:bg-red-700">
          +421 902 933 101
        </a>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden text-2xl text-gray-800"
          onClick={() => setIsMenuOpen(!isMenuOpen)}>
          {isMenuOpen ? <HiX /> : <HiMenu />}
        </button>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <motion.div
          initial={{ y: -20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.3 }}
          className="md:hidden bg-white shadow-lg">
          <nav className="flex flex-col p-4 gap-4">
            {navItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className={`font-medium ${
                  pathname === item.href
                    ? "text-red-600 font-semibold"
                    : "text-gray-800"
                }`}>
                {item.label}
              </Link>
            ))}
            <a
              href="tel:+421902933101"
              className="bg-red-600 text-white font-bold px-5 py-2 rounded-full text-center">
              +421 902 933 101
            </a>
          </nav>
        </motion.div>
      )}
    </motion.header>
  );
}
