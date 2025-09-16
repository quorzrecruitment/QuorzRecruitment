import React from "react";
import { FaUserClock, FaSearchDollar, FaClock } from "react-icons/fa";

export default function Advantages() {
  return (
    <section className="py-20 bg-[#F4F4F2]">
      <div className="container mx-auto max-w-6xl px-4">
        <h2 className="lg:text-[48px]  text-secondary md:text-4xl font-bold text-center mb-16">
          Advantages of Quorz Recruitment Executive Search
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {/* First Advantage */}
          <div className="bg-white p-8 rounded-lg shadow-md text-start hover:border border-secondary cursor-pointer">
            <div className="flex justify-center mb-6">
              <div className="bg-secondary p-4 rounded-full">
                <FaUserClock className="text-primary text-3xl" />
              </div>
            </div>
            <h3 className="lg:text-[21px] md:text-2xl font-display font-medium mb-4">
              Access to Passive Talent
            </h3>
            <p className="text-gray-600 text-[14px] font-sans">
              Engage with professionals who aren’t actively job hunting, giving
              your business the advantage of securing rare and exceptional
              candidates.
            </p>
          </div>

          {/* Second Advantage */}
          <div className="bg-white p-8 rounded-lg shadow-md text-start hover:border border-secondary cursor-pointer">
            <div className="flex justify-center mb-6">
              <div className="bg-secondary p-4 rounded-full">
                <FaSearchDollar className="text-primary text-3xl" />
              </div>
            </div>
            <h3 className="lg:text-[21px] md:text-2xl font-display font-medium mb-4">
              Specialised Industry Knowledge
            </h3>
            <p className="text-gray-600 text-[14px] font-sans">
              Our headhunters operate within defined industries and functions,
              providing deeper insight into your needs and delivering more
              accurate candidate matches.
            </p>
          </div>

          {/* Third Advantage */}
          <div className="bg-white p-8 rounded-lg shadow-md text-start hover:border border-secondary cursor-pointer">
            <div className="flex justify-center mb-6">
              <div className="bg-secondary p-4 rounded-full">
                <FaClock className="text-primary text-3xl" />
              </div>
            </div>
            <h3 className="lg:text-[21px] md:text-2xl font-display font-medium mb-4">
              Efficient & Discreet Process
            </h3>
            <p className="text-gray-600 text-[14px] font-sans">
              By outsourcing to our experts, you save valuable time and
              resources while benefiting from a professional, streamlined, and
              confidential search.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
