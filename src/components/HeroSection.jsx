import Image from "next/image";
import React from "react";

const HeroSection = () => {
  return (
    <div>
      <div className="relative w-screen h-screen overflow-y-scroll overflow-x-hidden">
      <Image
        src="/assets/bgImg.png"
        alt="Full screen"
        fill // shorthand for layout="fill"
        className="object-cover z-10"
      />
      <div className="absolute inset-0 bg-gradient-to-b from-[#FCC77B] to-[#FAB34D]/95" />
    </div>
      {/* <img src="D:\Swayam-MVJCE2025\public\bgImg.png" className='h-50 w-50' alt="" /> */}
    </div>
  );
};

export default HeroSection;
