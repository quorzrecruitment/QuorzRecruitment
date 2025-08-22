"use client";
import React from "react";

interface ModeFormProps {
  isOpen: boolean;
  setIsOpen: (isOpen: boolean) => void;
}

export default function ModeForm({ isOpen, setIsOpen }: ModeFormProps) {
  return (
    <div>
      {isOpen && (
        <div className="fixed inset-0  bg-black/50 z-50 flex justify-center items-center">
          <div className="bg-white w-full py-20 max-w-3xl mx-4 rounded-lg shadow-lg relative p-20">
            {/* Close Button */}
            <button
              onClick={() => setIsOpen(false)}
              className="absolute cursor-pointer top-4 right-4 text-gray-500 hover:text-black text-3xl">
              ×
            </button>

            {/* Modal Content */}
            <div className="text-center mb-6">
              <h2 className="text-2xl font-bold text-secondary">Contact us</h2>
              <p className="text-gray-600 mt-2 text-sm">
                Are you interested in our services? Fill out the short form and
                we will contact you soon. Or call us:
              </p>
              <p className="text-primary font-bold mt-3">+40 784 805 998 </p>
            </div>

            {/* Form */}
            <form className="space-y-4">
              <input
                type="text"
                placeholder="Name, surname*"
                className="w-full border border-primary px-4 py-2 rounded focus:outline-none focus:ring-2 focus:ring-primary"
              />
              <input
                type="text"
                placeholder="Company"
                className="w-full border border-primary px-4 py-2 rounded focus:outline-none focus:ring-2 focus:ring-primary"
              />

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <input
                  type="text"
                  placeholder="Phone contact*"
                  className="w-full border border-primary px-4 py-2 rounded focus:outline-none focus:ring-2 focus:ring-primary"
                />
                <input
                  type="email"
                  placeholder="Email*"
                  className="w-full border border-primary px-4 py-2 rounded focus:outline-none focus:ring-2 focus:ring-primary"
                />
              </div>

              <textarea
                placeholder="Report"
                rows={4}
                className="w-full border border-primary px-4 py-2 rounded focus:outline-none focus:ring-2 focus:ring-primary"></textarea>

              <div className="flex items-center space-x-2">
                <input type="checkbox" id="policy" />
                <label htmlFor="policy" className="text-sm text-gray-700">
                  I have read the Personal Data Processing Policy
                </label>
              </div>

              <button
                type="submit"
                className="bg-primary cursor-pointer text-white px-8 py-2 rounded hover:bg-secondary duration-300">
                Send →
              </button>
            </form>
          </div>
        </div>
      )}
    </div>
  );
}
