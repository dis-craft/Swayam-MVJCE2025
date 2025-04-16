import React from "react";
import Image from "next/image";

const HeroSection = () => {
  return (
    <div>
      <div className="mt-22">
        <Image
          src="/assets/SwayamLogo.png"
          alt="SwayamLogo"
          width={500}
          height={300}
          className="mx-auto"
        />

        <p className="text-center mt-5 text-[6rem]">VIRAASATH</p>

        <button className="cursor-pointer mx-auto block border-1 border-[#5F4A37] bg-[#f9efd1] text-[#5F4A37] px-4 py-3 rounded-2xl shadow-lg">
          Explore Events
        </button>
      </div>
    </div>
  );
};

export default HeroSection;
