import gsap from "gsap";
import Link from "next/link";
import React from "react";

const Navbar = () => {
  return (
    <nav className="w-full px-[7rem] py-[0.7rem] flex items-center justify-between fixed text-[#020023] bg-white">
      <div className="left">
        <h2
          onClick={() => (window.location.href = "/")}
          className="scroll-m-20 border-b border-[#020023] pb-2 text-3xl font-semibold tracking-tight first:mt-0 cursor-pointer"
        >
          WEOTO{" "}
        </h2>
      </div>
      <div className="right flex gap-[2.2rem] text-sm font-semibold font-sans items-center">
        <Link href="/home" className="uppercase hover:text-[#004AAD]">
          Home
        </Link>
        <Link href="/services" className="uppercase hover:text-[#004AAD]">
          Services
        </Link>
        <Link href="/work" className="uppercase hover:text-[#004AAD]">
          Our Work
        </Link>
        <Link href="/technologies" className="uppercase hover:text-[#004AAD]">
          Technologies
        </Link>
        <Link href="/about" className="uppercase hover:text-[#004AAD]">
          About Us
        </Link>
        <Link
          href="contact"
          className="border border-[#020023] ml-5 py-2.5 px-5 cursor-pointer hover:bg-[#020023] hover:text-white transition-colors duration-300"
        >
          CONTACT US
        </Link>
      </div>
    </nav>
  );
};

export default Navbar;
