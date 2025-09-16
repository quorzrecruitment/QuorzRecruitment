import React from "react";
import Image from "next/image";
import { TiMessages } from "react-icons/ti";
import { FaPen, FaCalendarAlt, FaQuestionCircle } from "react-icons/fa";
import Link from "next/link";

export default function Service() {
  return (
    <section className="py-20 bg-[#F4F4F2]">
      <div className="container max-w-7xl mx-auto px-4 mt-20">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 justify-center items-center">
          {/* Left Content */}
          <div>
            <div className="flex flex-col justify-center items-start">
              <span className="text-[17px] text-primary font-normal font-sans">
                SERVICES FOR APPLICANTS
              </span>
              <h2 className="text-[52px] font-bold font-sans mt-4 text-secondary leading-snug">
                Standing Out in Today’s <br /> Job Market
              </h2>
              <p className="text-[14px] text-secondary text-normal font-sans mt-4 max-w-md">
                Looking for your next big opportunity? We help you showcase your
                skills with confidence and clarity, increasing your chances of
                landing the role you’ve been aiming for.
              </p>
            </div>
            <Link href="/applicants">
              <button className="bg-primary text-white text-[16px] font-sans cursor-pointer rounded-full px-10 py-3 flex justify-center items-center mt-5 hover:bg-secondary duration-300">
                More Information for Applicants
              </button>
            </Link>
          </div>

          {/* Right Content */}
          <div className="relative flex justify-center items-center">
            {/* Background Round Image */}
            <div className="absolute inset-0 z-0 flex justify-center items-center max-w-[500px] mx-auto">
              <Image
                src="/images/round.png"
                alt="Applicants"
                width={600}
                height={600}
                className="object-cover"
              />
            </div>

            {/* Service Boxes */}
            <div className="relative z-10 grid grid-cols-1 sm:grid-cols-2 gap-6 w-full max-w-[550px]">
              {/* Card 1 */}
              <div className="bg-white p-6 shadow-md rounded-md hover:shadow-xl duration-300">
                <div className="flex items-center justify-center w-10 h-10 bg-primary text-white rounded-full mb-4">
                  <TiMessages size={20} />
                </div>
                <h3 className="text-lg font-semibold text-secondary">
                  Interview Coaching
                </h3>
                <p className="text-sm text-gray-600 mt-2">
                  Practical training, proven techniques, and mock interviews to
                  boost your confidence and performance.
                </p>
              </div>

              {/* Card 2 */}
              <div className="bg-white p-6 shadow-md rounded-md hover:shadow-xl duration-300">
                <div className="flex items-center justify-center w-10 h-10 bg-primary text-white rounded-full mb-4">
                  <FaPen size={18} />
                </div>
                <h3 className="text-lg font-semibold text-secondary">
                  CV & LinkedIn Optimization
                </h3>
                <p className="text-sm text-gray-600 mt-2">
                  We polish your CV and LinkedIn profile so you stand out from
                  the crowd and make a lasting first impression.
                </p>
              </div>

              {/* Card 3 */}
              <div className="bg-white p-6 shadow-md rounded-md hover:shadow-xl duration-300">
                <div className="flex items-center justify-center w-10 h-10 bg-primary text-white rounded-full mb-4">
                  <FaCalendarAlt size={18} />
                </div>
                <h3 className="text-lg font-semibold text-secondary">
                  Career & Market Insights
                </h3>
                <p className="text-sm text-gray-600 mt-2">
                  Detailed analysis of industry trends and job opportunities
                  across regions to match you with the right role.
                </p>
              </div>

              {/* Card 4 */}
              <div className="bg-white p-6 shadow-md rounded-md hover:shadow-xl duration-300">
                <div className="flex items-center justify-center w-10 h-10 bg-primary text-white rounded-full mb-4">
                  <FaQuestionCircle size={18} />
                </div>
                <h3 className="text-lg font-semibold text-secondary">
                  Personality & Strengths Assessment
                </h3>
                <p className="text-sm text-gray-600 mt-2">
                  Tailored evaluations that highlight your unique strengths and
                  help employers see your true potential.
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="lg:mt-20 md:mt-10 mt-5 bg-[#192C33] w-full ">
          <div className="grid grid-cols-1 md:grid-cols-2 sm:grid-cols-1 lg:grid-cols-4 gap-4 p-10">
            <div>
              <h2 className="text-[40px] font-bold font-sans text-white">
                8,000+
              </h2>
              <p className="text-[16px] font-bold font-sans text-white">
                interviews conducted
              </p>
            </div>
            <div>
              <h2 className="text-[40px] font-bold font-sans text-white">
                1200+
              </h2>
              <p className="text-[16px] font-bold font-sans text-white">
                verified CVs
              </p>
            </div>
            <div>
              <h2 className="text-[40px] font-bold font-sans text-white">
                170+
              </h2>
              <p className="text-[16px] font-bold font-sans text-white">
                satisfied employers
              </p>
            </div>
            <div>
              <h2 className="text-[40px] font-bold font-sans text-white">
                50+
              </h2>
              <p className="text-[16px] font-bold font-sans text-white">
                professional articles published
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
