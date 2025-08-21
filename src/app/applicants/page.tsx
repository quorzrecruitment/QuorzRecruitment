import React from "react";
import AppicantHero from "@/components/Applicant/AppicantHero";
import Opportunity from "@/components/Applicant/Opportunity";
import Consultations from "@/components/Applicant/Consultations";
import Improve from "@/components/Applicant/Improve";
import Personality from "@/components/Employers/Personality";
export default function page() {
  return (
    <main>
      <AppicantHero />
      <Opportunity />
      <Consultations />
      <Improve />
      <Personality />
    </main>
  );
}
