import Brand from "@/components/Home/Brand";

import Finding from "@/components/Home/Finding";
import Hero from "@/components/Home/Hero";
import Employers from "../components/Home/Employer";
import Service from "@/components/Home/Service";
import OurClient from "@/components/Home/OurClient";
import Competitive from "@/components/Home/Competitive";
import BlogHome from "@/components/Home/Blog";
import Banner from "@/common/Banner";

export default function Home() {
  return (
    <main className="">
      <Hero />
      <Brand />
      <Finding />
      <Employers />
      <Service />
      <OurClient />
      <Competitive />
      {/* <BlogHome/> */}
      <Banner />
    </main>
  );
}
