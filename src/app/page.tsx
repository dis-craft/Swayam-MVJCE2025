import NavBar from "@/components/NavBar";
import HeroSection from "@/components/HeroSection";
import VideoSection from "@/components/VideoSection";
import About from "@/components/About";
import Gallery from "@/components/Gallery";
import Sponsors from "@/components/Sponsors";
import Contact from "@/components/Contact";
import { Open_Sans } from "next/font/google";

const openSans = Open_Sans({
  subsets: ["latin"],
  weight: ["400", "600", "700"],
});
import ChatWidget from "@/components/ChatWidget"; // Import ChatWidget here

export default function Home() {
  return (
    <main
      // style={{ backgroundImage: "url('/assets/Background.png')" }}
      className={`min-h-screen bg-contain bg-center bg-[url('/assets/AndroidBackground.png')] md:bg-[url('/assets/Background.png')] bg-fixed text-[#5F4A37] ${openSans.className} scroll-smooth`}
    >
      <NavBar />
      <div className="h-screen flex items-start p-24 md:p-20 justify-center ">
        <HeroSection />
      </div>
      <div className="flex flex-col gap-[10rem]">
        <VideoSection />
        <About />
        <Gallery />
        <Sponsors />
        <Contact />
      </div>
      {/* ChatWidget rendered as a fixed-position component */}
      <ChatWidget /> {/* This is where the chatbot will appear */}
    </main>
  );
}

// bg-[url('/assets/Background.png')]
