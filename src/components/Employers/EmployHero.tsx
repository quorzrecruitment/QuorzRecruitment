import React from "react";
import Image from "next/image";
export default function EmployHero() {
  return (
    <section className="py-20 bg-secondary">
      <div className="container mx-auto  px-4">
        <div className="mt-12">
          <span className="text-2xl font-bold text-primary ">
            COMPREHENSIVE HR SERVICES
          </span>
          <h1 className="lg:text-[48px] md:text-3xl sm:text-2xl font-sans max-w-2xl mt-4 font-bold text-white ">
            Tailored recruitment and headhunting solutions for employers.
          </h1>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mt-12">
          <div>
            <div className="bg-white px-2  pb-10">
              <Image
                src="/images/employee1.png"
                alt="Employers"
                width={600}
                height={600}
                className="object-cover w-full h-auto"
              />
              <div className="px-10 py-5">
                <h2 className="text-[30px] text-secondary font-bold font-sans">
                  Headhunting
                </h2>
                <p className="text-secondary text-[14px] font-normal font-sans">
                  Headhunting is more than filling vacancies; it is the
                  strategic art of identifying and attracting top talent who can
                  deliver a measurable competitive advantage to your business.
                </p>
              </div>
            </div>
            <button className="text-[20px] cursor-pointer font-bold font-sans text-white bg-primary px-10 py-3 w-full  hover:bg-secondary duration-300">
              More Information
            </button>
          </div>
          <div>
            <div className="bg-white px-2  pb-10">
              <Image
                src="/images/employee2.png"
                alt="Employers"
                width={600}
                height={600}
                className="object-cover w-full h-auto"
              />
              <div className="px-10 py-5">
                <h2 className="text-[30px] text-secondary font-bold font-sans">
                  Recruiting
                </h2>
                <p className="text-secondary text-[14px] font-normal font-sans">
                  A structured and thorough process of sourcing, attracting, and
                  securing employees for diverse roles across your organisation.
                  Our recruiters employ modern tools, market insights, and
                  proven methods to connect you with the right candidates.
                </p>
              </div>
            </div>
            <button className="text-[20px] cursor-pointer font-bold font-sans text-white bg-primary px-10 py-3 w-full  hover:bg-secondary duration-300">
              More Information
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
