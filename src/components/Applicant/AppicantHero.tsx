import React from "react";
import Image from "next/image";
export default function AppicantHero() {
  return (
    <section className="py-20 bg-secondary">
      <div className="container mx-auto  px-4">
        <div className="mt-16">
          <span className="text-2xl font-bold text-primary ">
            Services for Candidates
          </span>
          <h1 className="text-4xl font-bold text-white ">
            How to succeed in today’s job market.
          </h1>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mt-12">
          <div>
            <div className="bg-white   pb-10">
              <Image
                src="/images/find4.png"
                alt="Employers"
                width={600}
                height={600}
                className="object-cover w-full h-auto"
              />
              <div className="px-10 py-5">
                <h2 className="text-[30px] text-secondary font-bold font-sans">
                  Consultations
                </h2>
                <p className="text-secondary text-[14px] font-normal font-sans">
                  Through tailored candidate consultations, we equip you with
                  the tools to present yourself with confidence and
                  professionalism. Our experienced consultants provide practical
                  guidance to sharpen your interview techniques, enhance your
                  personal brand, and boost your chances of securing the role
                  that best matches your skills and ambitions.
                </p>
              </div>
            </div>
          </div>
          <div>
            <div className="bg-white  pb-10">
              <Image
                src="/images/find3.png"
                alt="Employers"
                width={600}
                height={600}
                className="object-cover w-full h-auto"
              />
              <div className="px-10 py-5">
                <h2 className="text-[30px] text-secondary font-bold font-sans">
                  Personality Assessments
                </h2>
                <p className="text-secondary text-[14px] font-normal font-sans">
                  Our personality assessments offer clear insights into your
                  strengths, motivations, and preferred work style, helping both
                  you and potential employers achieve a deeper understanding of
                  your professional fit. These evaluations not only support
                  better job alignment but also create a stronger foundation for
                  long-term career growth and development.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
