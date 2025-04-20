import React from "react";
import Image from "next/image";
import Link from "next/link";

const HeroSection = () => {
  return (
    <div>
      <div className=" ">
        <Image
          src="/assets/SwayamLogo.png"
          alt="SwayamLogo"
          width={500}
          height={300}
          className="mx-auto w-full max-w-[350px] sm:max-w-[500px] h-auto"
          priority
        />

        <p className="text-center sm:mt-8 mt-5 text-6xl sm:text-6xl md:text-[6rem]">VIRASATH</p>

        <button className="cursor-pointer mx-auto block border border-[#5F4A37] bg-[#f9efd1] text-[#5F4A37] px-3 py-2 sm:px-4 sm:py-3 rounded-xl sm:rounded-2xl shadow-lg text-sm sm:text-base mt-5 sm:mt-6">
          <Link href={"/events"}> Explore Events</Link>
        </button>
      </div>
    </div>
  );
};

export default HeroSection;
