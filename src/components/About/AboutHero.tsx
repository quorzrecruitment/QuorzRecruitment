import React from "react";

export default function AboutHero() {
  return (
    <section className="py-20 bg-[#F4F4F2]">
      <div className="container mx-auto max-w-7xl px-4">
        <div className="max-w-2xl  flex flex-col ">
          <span className="text-[16px] font-sans font-bold text-primary mb-4">
            ABOUT US
          </span>
          <h1 className="text-[48px] text-secondary font-sans ">
            10 Years of Recruitment Expertise
          </h1>
          <p className="text-[16px] font-sans text-[#192c33] mt-4">
            For two decades, <strong>XYZ Recruitment</strong> has been at the
            forefront of the recruitment and headhunting industry. We specialise
            in filling challenging positions across diverse sectors, often
            requiring unique skill sets and language combinations. By combining
            proven expertise with AI-driven tools and modern technologies, we
            deliver faster, more precise candidate searches and direct outreach.
          </p>
          <p className="text-[16px] font-sans text-[#192c33] mt-4">
            Our work goes beyond recruitment; we operate flexibly online,
            actively participate in professional networking events, and, through
            strategic partnerships, provide clients with access to additional
            services in education and personal development.
          </p>
          {/* <ul className="list-disc ml-10  space-y-3 text-[14px] font-normal font-sans text-[#192c33]  mt-10 ">
            <li>
              We have been providing high-quality headhunting services on the
              market for 20 years.
            </li>
            <li>
              Our teams focus on challenging positions with interesting language
              combinations
            </li>
            <li>
              We also use AI and modern technologies for faster headhunting and
              direct outreach
            </li>
            <li>We operate more flexibly online</li>
            <li>
              We attend networking events and, thanks to partnerships, offer new
              services in the field of education and personal development for
              our clients.
            </li>
          </ul> */}
        </div>
      </div>
    </section>
  );
}
