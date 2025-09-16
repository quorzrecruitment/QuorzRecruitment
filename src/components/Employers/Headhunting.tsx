"use client";
import React from "react";
import Image from "next/image";
export default function Headhunting() {
  return (
    <section className="py-20 bg-[#F4F4F2]">
      <div className="container mx-auto max-w-6xl px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 justify-between items-center gap-12">
          <div>
            <div className="flex flex-col justify-center items-start">
              <span className="text-[17px] text-primary font-normal font-sans">
                Executive Search
              </span>
              <h2 className="text-[52px] font-medium font-sans mt-4 text-secondary">
                Executive Search at Quorz Recruitment
              </h2>
              <p className="text-[14px] text-secondary text-normal font-sans mt-4">
                <strong>Quorz Recruitment</strong>’s executive search service
                focuses on connecting businesses with exceptional leaders who
                may not be actively seeking new roles but possess the skills and
                expertise to drive success. Using a discreet, strategic
                approach, our headhunters identify and engage high-calibre
                professionals, presenting them with tailored opportunities that
                align with their career goals and your company’s long-term
                vision.
              </p>
            </div>
          </div>
          <div className="flex justify-center items-center">
            <Image
              src="/images/round.png"
              alt="Headhunting"
              width={600}
              height={600}
              className="object-cover max-w-[400px] h-auto"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
