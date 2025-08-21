import React from "react";

export default function OurClient() {
  return (
    <section
      className="relative py-20 bg-fixed bg-center bg-cover"
      style={{ backgroundImage: "url('/images/banner.png')" }}>
      {/* Overlay for background opacity */}
      <div className="absolute inset-0 bg-white/30 z-0"></div>
      {/* or use bg-black/40 for dark overlay */}

      {/* Content */}
      <div className="relative z-10 container mx-auto px-6 text-center">
        <div className="flex flex-col justify-center items-center max-w-6xl mx-auto">
          <span className="text-[17px] text-primary font-normal font-sans">
            CASE STUDIES & CLIENT REFERENCES
          </span>
          <h2 className="text-[52px] font-bold font-sans mt-4 text-secondary leading-snug">
            How we’ve delivered results for <br /> our clients
          </h2>

          <div className="bg-white w-full text-start p-10 max-w-5xl rounded-lg shadow-sm lg:mt-20 md:mt-10 sm:mt-5 mt-5">
            <h1 className="text-2xl font-bold text-gray-800 mb-4">
              Headhunting
            </h1>

            <div className="flex items-start mb-4">
              <span className="text-primary text-xl"> ★★★★★ </span>
            </div>
            <div className="space-y-4 text-gray-700">
              <p className="text-heading text-sm font-bold">
                A global company urgently needed to fill a specialised role.
                Their previous agency had failed to find suitable candidates.
                After a thorough consultation, we identified that certain
                technical requirements were unnecessarily restrictive. By
                refining the criteria and leveraging our talent database, we
                successfully filled the role within two weeks presenting three
                shortlisted candidates, two of whom were an excellent technical
                and cultural fit.
              </p>
              {/* 
              <p>
                We discussed the position in depth with the manager and found
                that their requirements were unnecessarily set on software
                knowledge that could be learned. We adjusted the requirements
                and targeted candidates from our database.
              </p>

              <p className="text-primary text-sm font-bold">
                We managed to fill the position within 2 weeks, with the
                shortlist consisting of three candidates, two of whom could be
                considered to be fully qualified for the position, both
                technically and personally.
              </p> */}
            </div>
          </div>
          <div className="bg-white w-full text-start p-10 max-w-5xl rounded-lg shadow-sm lg:mt-20 md:mt-10 sm:mt-5 mt-5">
            <h1 className="text-2xl font-bold text-gray-800 mb-4">
              Recruiting
            </h1>

            <div className="flex items-start mb-4">
              <span className="text-primary text-xl"> ★★★★★ </span>
            </div>
            <div className="space-y-4 text-gray-700">
              <p className="text-heading text-sm font-bold">
                A company required a proactive sales representative with strong
                industry connections. While the role seemed ideal for
                headhunting, we also deployed a broad recruitment strategy
                combining targeted advertising, marketing campaigns, social
                media outreach, and database searches. Within two weeks, we
                secured a candidate with the right personality profile and
                professional background to excel in the role.
              </p>

              {/* <p>
                However, we also include the classic recruiting process, namely
                advertising and selecting suitable candidates. Later, we found
                out that the client only placed one advertisement and received
                few candidates, and even in terms of personality, they did not
                fully fit their structure.
              </p>

              <p className="text-primary text-sm font-bold">
                We used several means – massive advertising, marketing, social
                networks and searching in external and internal databases.
                Already during the process of informing about the position, a
                large number of applicants applied, from which we managed to
                select a suitable personality profile. The process lasted 2
                weeks.
              </p> */}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
