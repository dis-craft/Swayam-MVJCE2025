import Image from "next/image";
import React from "react";

const HeroSection = () => {
  return (
    <div className="relative">
      <div className="relative w-screen min-h-screen overflow-y-scroll overflow-x-hidden">
        <Image
          src="/assets/bgImg.png"
          alt="Full screen"
          fill
          className="object-cover z-10"
        />
      </div>
      <div className="relative w-screen  min-h-screen overflow-y-scroll overflow-x-hidden">
        <Image
          src="/assets/bgImg2.png"
          alt="Full screen"
          fill
          className="object-cover z-10"
        />
      </div>
      <div className="relative w-screen  min-h-screen overflow-y-scroll overflow-x-hidden">
        <Image
          src="/assets/bgImg3.png"
          alt="Full screen"
          fill
          className="object-cover z-10"
        />
      </div>
      <Image
        className="absolute top-0 left-82 z-20"
        src={"/assets/swayamLogo.png"}
        width={900}
        height={900}
        alt="Swayam Logo"
      ></Image>
      <Image
        className="absolute top-[20rem] left-80 z-20"
        src={"/assets/frontImg.png"}
        width={900}
        height={900}
        alt="Front Image"
      ></Image>
      <Image
        className="absolute top-[62rem] left-100 z-20"
        src={"/assets/VIRASAT.png"}
        width={700}
        height={700}
        alt="VIRASAT"
      ></Image>
      <Image
        className="absolute top-[70rem] left-100 z-20"
        src={"/assets/date.png"}
        width={700}
        height={700}
        alt="Date"
      ></Image>
      <div className="absolute inset-0 bg-gradient-to-b from-[#FCC77B] to-[#FAB34D]/95" />
    </div>
  );
};

export default HeroSection;
