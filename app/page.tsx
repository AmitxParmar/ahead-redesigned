"use client";
import Footer from "@/components/Footer";
import LandingPage from "@/components/LandingPage";

import Showcase from "@/components/Showcase";
import GetFamiliar from "@/components/GetFamiliar";
import AppIntro from "@/components/AppIntro";
import SelfImprovementTour from "@/components/SelfImprovementTour";

import { motion } from "framer-motion";
import WhatOthersThinkOfYou from "@/components/WhatOthersThinkOfYou";

export default function Home() {
  const EQBeatsIQ = [
    "People with high emotional intelligence (EQ) live more fulfilled lives. They tend to be happier and have healthier relationships.",
    "They are more successful in their pursuits and make for inspiring leaders. According to science, they earn $29k a year.",
  ];

  return (
    <motion.main
      animate={{ scrollBehavior: "smooth" }}
      className="flex bg-white w-screen pt-32 min-h-screen flex-col items-center justify-between gap-y-3 overflow-x-hidden"
    >
      <section className="relative overflow-hidden mx-6">
        <LandingPage />
      </section>

      <section className="md:py-12 mx-6">
        <Showcase title="EQ beats IQ" descriptions={EQBeatsIQ} />
      </section>

      <section className="justify-start">
        <GetFamiliar />
      </section>

      <section className="relative overflow-hidden mx-6">
        <AppIntro />
      </section>

      <section>
        <SelfImprovementTour />
      </section>

      <section className="md:py-12">
        <Showcase title="EQ beats IQ" descriptions={EQBeatsIQ} />
      </section>

      <section className="px-28">
        <WhatOthersThinkOfYou />
      </section>
      {/* Sign section */}
      <div className="bg-black h-28 w-28"></div>
      <Footer />
    </motion.main>
  );
}
