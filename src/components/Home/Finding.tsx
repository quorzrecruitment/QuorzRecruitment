import React from "react";
import Image from "next/image";
export default function Finding() {
  return (
    <section className="py-20 bg-[#F4F4F2]">
      <div className="container max-w-7xl mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 justify-between items-center">
          <div className="col-span-1 w-full">
            <span className="text-[17px] text-primary font-normal font-sans">
              NOT JUST A STAFFING AGENCY
            </span>
            <h2 className="text-[52px] font-bold font-sans mt-4 text-secondary">
              Finding the right person is both an art and a science.
            </h2>
            <h5 className="text-[20px] font-bold font-sans mt-4">
              Every organisation is built by its people, and those people
              determine its success. That is why our work goes beyond filling
              vacancies.
            </h5>
            <p className="text-[14px] text-secondary text-normal font-sans mt-4">
              At <strong>XYZ Recruitment</strong>, we are committed to the
              success of every employer and every professional we serve. We know
              that each client and candidate is unique, and we treat every
              engagement with precision, dedication, and integrity.
            </p>
          </div>

          <div className="col-span-1 flex lg:flex-row flex-col md:flex-col justify-center space-x-10">
            <Image
              src="/images/find1.png"
              alt="Finding"
              width={300}
              height={300}
              priority
              className="rounded-full object-cover"
            />

            <div className="flex flex-col space-y-10">
              {/* First animated border image */}
              <div className="p-[3px] rounded-full animate-border bg-gradient-to-r from-[#dd0525] via-transparent to-[#dd0525]">
                <Image
                  src="/images/find2.png"
                  alt="Bob"
                  width={220}
                  height={220}
                  priority
                  className="rounded-full  object-cover bg-white"
                />
              </div>

              {/* Second animated border image */}
              <div className="p-[3px] rounded-full animate-border bg-gradient-to-r from-[#dd0525] via-transparent to-[#dd0525]">
                <Image
                  src="/images/find3.png"
                  alt="Bob"
                  width={220}
                  height={220}
                  priority
                  className="rounded-full object-cover bg-white"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
