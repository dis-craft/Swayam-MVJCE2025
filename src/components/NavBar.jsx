import Image from "next/image";
import React from "react";
import Link from "next/link";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

const NavBar = () => {
  return (
    <div className="flex justify-around items-center w-full overflow-x-hidden h-20 px-10 py-4 bg-[#955734] text-xl font-bold ">
      <Image
        src="/assets/mvjLogo.png"
        height={100}
        width={100}
        alt="MVJ Logo"
      ></Image>
      <div>
        <ul className="flex gap-10 items-center w-full">
          <li>
            <Link href={"/"}>Home</Link>
          </li>
          <li>
            <Link href={"/about"}>About</Link>
          </li>
          <li>
            <Link href={"/gallery"}>Gallery</Link>
          </li>
          <li>
            <Link href={"/events"}>Events</Link>
          </li>
          <li>
            <Link href={"/login"}>Login</Link>
          </li>
        </ul>
      </div>
      <div>
        <DropdownMenu>
          <DropdownMenuTrigger className="cursor-pointer border-none">
            Menu
          </DropdownMenuTrigger>
          <DropdownMenuContent>
            <DropdownMenuItem>My Registrations</DropdownMenuItem>
            <DropdownMenuItem>Events Schedule</DropdownMenuItem>
            <DropdownMenuItem>Brochure</DropdownMenuItem>
            <DropdownMenuItem>Workshop</DropdownMenuItem>
            <DropdownMenuItem>Sponsorships</DropdownMenuItem>
            <DropdownMenuItem>Contacts</DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      </div>
    </div>
  );
};

export default NavBar;
