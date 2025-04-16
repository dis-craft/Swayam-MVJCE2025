import NavBar from "@/components/NavBar";
import HeroSection from "@/components/HeroSection";
import VideoSection from "@/components/VideoSection";
import About from "@/components/About";

import { Angkor } from "next/font/google";

const angkor = Angkor({ subsets: ["latin"], weight: "400" });

export default function Home() {
  return (
    <main
      style={{ backgroundImage: "url('/assets/Background.png')" }}
      className={`min-h-screen bg-contain bg-center bg-fixed text-[#5F4A37] ${angkor.className}`}
    >
      <NavBar />
      <div className="flex flex-col gap-[14rem]">
        <HeroSection />
        <VideoSection />
        <About />
      </div>
    </main>
  );
}
