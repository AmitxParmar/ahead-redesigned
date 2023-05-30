import Footer from "@/components/Footer";
import LandingPage from "@/components/LandingPage";
import Image from "next/image";

export default function Home() {
  return (
    <main className="flex bg-white w-screen pt-32 min-h-screen flex-col items-center justify-between gap-y-3 overflow-hidden">
      <section className="relative overflow-hidden mx-6">
        <LandingPage />
      </section>
      <div className="bg-gray-300 h-28 w-28">2</div>
      <div className="bg-gray-300 h-28 w-28">3</div>
      <div className="bg-gray-300 h-28 w-28"></div>
      <div className="bg-black h-28 w-28"></div>
      <div className="bg-black h-28 w-28"></div>
      <div className="bg-black h-28 w-28"></div>
      <Footer />
    </main>
  );
}
