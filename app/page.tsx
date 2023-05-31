import Footer from "@/components/Footer";
import LandingPage from "@/components/LandingPage";
import Image from "next/image";
import Showcase from "@/components/Showcase";
export default function Home() {
  const EQBeatsIQ = ["People with high emotional intelligence (EQ) live more fulfilled lives. They tend to be happier and have healthier relationships.", "They are more successful in their pursuits and make for inspiring leaders. According to science, they earn $29k a year."
  ]
  return (
    <main className="flex bg-white w-screen pt-32 min-h-screen flex-col items-center justify-between gap-y-3 overflow-hidden">
      <section className="relative overflow-hidden mx-6">
        <LandingPage />
      </section>

      <section className="md:py-12">
        <Showcase title="EQ beats IQ" descriptions={EQBeatsIQ} />
      </section>

      <div className="bg-black h-28 w-28"></div>
      <Footer />
    </main>
  );
}
