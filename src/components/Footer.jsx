import { Copyright } from "lucide-react";
import { Angkor } from "next/font/google";

const angkor = Angkor({ subsets: ["latin"], weight: "400" });

const Footer = () => {
  return (
    <div className="flex justify-center gap-3 text-[#5F4A37] bg-[#f9efd1] py-2">
      <Copyright />
      <p className={`${angkor.className}`}>All rights reserved 2025</p>
    </div>
  );
};

export default Footer;
