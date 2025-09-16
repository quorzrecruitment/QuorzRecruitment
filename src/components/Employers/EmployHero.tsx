import React from "react";
import Image from "next/image";
import Link from "next/link";
export default function EmployHero() {
  return (
    <section className="py-20 bg-secondary">
      <div className="container mx-auto  px-4">
        <div className="mt-16">
          <span className="text-2xl font-bold text-primary ">
            HOLISTIC HR SUPPORT
          </span>
          <h1 className="lg:text-[48px] md:text-3xl sm:text-2xl font-sans max-w-2xl mt-4 font-bold text-white ">
            Specialized hiring and headhunting strategies tailored to your
            business needs.
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
                  Executive Search
                </h2>
                <p className="text-secondary text-[14px] font-normal font-sans">
                  Executive Search is more than filling vacancies; it is the
                  strategic art of identifying and attracting top talent who can
                  deliver a measurable competitive advantage to your business.
                </p>
              </div>
            </div>
            <Link href="/about">
              <button className="text-[20px] cursor-pointer font-bold font-sans text-white bg-primary px-10 py-3 w-full  hover:bg-secondary duration-300">
                More Information
              </button>
            </Link>
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
                  Talent Acquisition
                </h2>
                <p className="text-secondary text-[14px] font-normal font-sans">
                  We deliver a streamlined, strategic approach to sourcing,
                  engaging, and hiring top talent for every level of your
                  organization. By combining advanced tools, market
                  intelligence, and industry expertise, our recruiters ensure
                  you secure candidates who align with your business goals.
                </p>
              </div>
            </div>
            <Link href="/about">
              <button className="text-[20px] cursor-pointer font-bold font-sans text-white bg-primary px-10 py-3 w-full  hover:bg-secondary duration-300">
                More Information
              </button>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
