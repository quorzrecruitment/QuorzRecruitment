"use client";
import React, { useEffect, useState } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";

const partners = [
  "/images/partners1.png",
  "/images/partners2.png",
  "/images/partners3.png",
  "/images/partners4.png",
];

const brand = [
  "/images/brand1.png",
  "/images/brand2.png",
  "/images/brand3.png",
  "/images/brand4.png",
  "/images/brand5.png",
  "/images/brand6.png",
  "/images/brand7.png",
  "/images/brand8.png",
];

export default function Brand() {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) =>
        prevIndex === brand.length - 1 ? 0 : prevIndex + 1
      );
    }, 3000); // Change slide every 3 seconds

    return () => clearInterval(interval);
  }, []);

  // Split brands into groups for sliding (e.g., 4 at a time)
  const visibleBrands = [];
  for (let i = 0; i < 4; i++) {
    const index = (currentIndex + i) % brand.length;
    visibleBrands.push(brand[index]);
  }

  return (
    <section className="py-20 bg-[#F4F4F2]">
      <div className="container max-w-7xl mx-auto px-4">
        <h4 className="text-secondary text-center text-[26px] font-bold">
          Trusted for Over 10 Years in HR by:
        </h4>

        {/* Auto-sliding Brand Carousel */}
        <div className="my-8 overflow-hidden">
          <AnimatePresence mode="wait">
            <motion.div
              key={currentIndex}
              initial={{ opacity: 0, x: 100 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -100 }}
              transition={{ duration: 0.5 }}
              className="grid grid-cols-2 md:grid-cols-4 gap-4">
              {visibleBrands.map((brandImg, index) => (
                <motion.div
                  key={`${currentIndex}-${index}`}
                  whileHover={{ scale: 1.05 }}
                  className="flex items-center justify-center p-4 rounded-lg ">
                  <Image
                    src={brandImg}
                    alt={`brand ${index}`}
                    width={200}
                    height={200}
                    // className="object-contain h-16"
                  />
                </motion.div>
              ))}
            </motion.div>
          </AnimatePresence>
        </div>

        {/* Existing Partners Section (unchanged) */}
        <div className="max-w-5xl mx-auto">
          <p className="text-secondary text-center text-[18px] font-normal">
            Our partners:
          </p>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
            {partners.map((partner, index) => (
              <Image
                key={index}
                src={partner}
                alt="partner"
                width={200}
                height={200}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
