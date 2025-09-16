"use client";
import ModeForm from "@/common/ModeForm";
import React, { useState } from "react";

export default function Improve() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <section className="py-20 bg-[#F4F4F2]">
      <div className="container max-w-6xl mx-auto text-center px-4 space-y-5">
        <h2 className="text-[33px] font-medium font-sans mt-4 text-secondary">
          We link dedicated and skilled individuals with employers who
          appreciate reliability, craftsmanship, and hard work. From full-time
          to part-time and contract opportunities, our vacancies span a wide
          range of blue-collar roles across industries. Our focus is on helping
          you secure stable employment that fits your skills and experience
          while creating pathways for long-term career growth.
        </h2>
        {/* <p className="text-[14px] text-center text-secondary text-normal font-sans mt-4 ">
          The price of consultations for applicants is 120 EUR incl. VAT / hour.
        </p> */}
        <button
          onClick={() => setIsOpen(true)}
          className="text-[20px] cursor-pointer font-bold font-sans text-white bg-primary px-10 py-3 rounded-4xl mt-5 hover:bg-secondary duration-300">
          I want the best people.
        </button>
      </div>

      {/* Modal */}
      <ModeForm isOpen={isOpen} setIsOpen={setIsOpen} />
    </section>
  );
}
