import Navbar from "@/components/NavBar";

import { Angkor } from "next/font/google";

const angkor = Angkor({ subsets: ["latin"], weight: "400" });

const page = () => {
  return (
    <div
      className={`min-h-screen bg-contain bg-center bg-[url('/assets/AndroidBackground.png')] md:bg-[url('/assets/Background.png')] bg-fixed text-[#5F4A37] ${angkor.className} scroll-smooth`}
    >
      <Navbar />
      <p className="text-center mt-5">Registrations Opens Soon</p>
    </div>
  );
};

export default page;
