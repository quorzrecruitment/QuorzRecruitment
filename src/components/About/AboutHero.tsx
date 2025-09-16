import React from "react";

export default function AboutHero() {
  return (
    <section className="py-20 bg-[#F4F4F2]">
      <div className="container mx-auto max-w-7xl px-4">
        <div className="max-w-2xl  flex flex-col mt-12">
          <span className="text-[16px] font-sans font-bold text-primary mb-4">
            ABOUT US
          </span>
          <h1 className="text-[48px] text-secondary font-sans ">
            10 Years of Recruitment Expertise
          </h1>
          <p className="text-[16px] font-sans text-[#192c33] mt-4">
            For the past 10 years,<strong> Quorz Recruitment</strong> has built
            a strong reputation in Executive Search and Talent Acquisition,
            helping businesses secure top talent for complex and hard-to-fill
            roles across multiple industries. From rare skill sets to unique
            language expertise, our approach blends deep recruitment knowledge
            with AI-driven tools and modern technology to deliver precise
            candidate searches and targeted outreach. More than a recruitment
            firm, we operate with flexibility online, maintain an active
            presence at professional networking events, and, through strategic
            partnerships, extend added value with services in education and
            personal development.
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
