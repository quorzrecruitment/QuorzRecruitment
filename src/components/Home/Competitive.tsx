"use client";
import ModeForm from "@/common/ModeForm";
import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

export default function Competitive() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <section className="py-20 bg-[#F4F4F2]">
      <div className="container max-w-7xl mx-auto px-4">
        <motion.div
          className="text-center flex flex-col justify-center items-center space-y-5"
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}>
          <motion.h2
            className="text-[33px] font-medium font-sans text-secondary"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.7 }}>
            Specialised Recruitment Services – Powered by Our Expertise
          </motion.h2>

          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={() => setIsOpen(true)}
            className="text-[20px] cursor-pointer font-bold font-sans text-white bg-primary px-10 py-3 rounded-4xl mt-5 hover:bg-secondary duration-300">
            I want the best people.
          </motion.button>
        </motion.div>
      </div>

      {/* Modal with animation */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            key="modal"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}>
            <ModeForm isOpen={isOpen} setIsOpen={setIsOpen} />
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
