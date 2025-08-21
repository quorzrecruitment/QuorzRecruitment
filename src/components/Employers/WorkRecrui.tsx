import React from "react";
import Image from "next/image";
export default function WorkRecrui() {
  return (
    <section className="py-20 bg-[#F4F4F2]">
      <div className="container mx-auto max-w-6xl px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 justify-between items-center gap-12">
          <div>
            <div className="flex flex-col justify-center items-start">
              <span className="text-[17px] text-primary uppercase font-normal font-sans">
                Recruiting
              </span>
              <h2 className="text-[52px] font-medium font-sans mt-4 text-secondary">
                How Recruiting Works at XYZ Recruitment
              </h2>
              <p className="text-[14px] text-secondary text-normal font-sans mt-4">
                Our recruitment specialists follow a comprehensive process to
                ensure you hire the right fit. This includes advertising
                vacancies on targeted platforms, carefully screening and
                shortlisting CVs, coordinating interviews, and conducting
                thorough reference checks. We also place strong emphasis on
                ensuring each candidate aligns with your organisation’s values
                and culture. Every step is designed to help you build strong,
                lasting teams that contribute to long-term success.
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
