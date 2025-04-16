import React from "react";
import Image from "next/image";
import { Angkor } from "next/font/google";

const angkor = Angkor({ subsets: ["latin"], weight: "400" });

const NavBar = () => {
  return (
    <div>
      <div
        className={`flex justify-evenly items-center p-5 ${angkor.className}`}
      >
        <div>
          <Image
            src="/assets/mvjLogo.png"
            alt="MVJLogo"
            width={120}
            height={120}
          />
        </div>
        <ul className="flex gap-10 items-center cursor-pointer">
          <li>Home</li>
          <li>Events</li>
          <li>My Registrations</li>
          <li>Brochure</li>
        </ul>
        <button className="cursor-pointer bg-[#5F4A37] text-[#f9efd1] h-10 w-25 rounded-full">
          Login
        </button>
      </div>
    </div>
  );
};

export default NavBar;
