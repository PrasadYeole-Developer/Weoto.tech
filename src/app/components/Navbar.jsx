"use client";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import Link from "next/link";
import React, { useRef } from "react";

const Navbar = () => {
  const h2 = useRef();
  const links = useRef();
  const navTL = gsap.timeline();
  useGSAP(() => {
    navTL
      .from(
        h2.current,
        {
          opacity: 0,
          yPercent: -380,
          duration: 0.8,
          ease: "power3.inOut",
        },
        "nav"
      )
      .from(
        links.current,
        {
          opacity: 0,
          duration: 0.7,
          ease: "power3.in",
        },
        "0.4"
      );
  }, []);
  return (
    <nav className="w-full px-[7rem] py-[0.7rem] flex items-center justify-between fixed text-[#020023] bg-white overflow-hidden">
      <div className="left">
        <h2
          ref={h2}
          onClick={() => (window.location.href = "/")}
          className="scroll-m-20 border-b border-[#020023] pb-2 text-3xl font-semibold tracking-tight first:mt-0 cursor-pointer"
        >
          WEOTO{" "}
        </h2>
      </div>
      <div
        ref={links}
        className="right flex gap-[2.2rem] text-sm font-semibold font-sans items-center"
      >
        <Link
          href="/home"
          className="uppercase hover:text-[#004AAD] transition-colors duration-200"
        >
          Home
        </Link>
        <Link
          href="/services"
          className="uppercase hover:text-[#004AAD] transition-colors duration-200"
        >
          Services
        </Link>
        <Link
          href="/work"
          className="uppercase hover:text-[#004AAD] transition-colors duration-200"
        >
          Our Work
        </Link>
        <Link
          href="/technologies"
          className="uppercase hover:text-[#004AAD] transition-colors duration-200"
        >
          Technologies
        </Link>
        <Link
          href="/about"
          className="uppercase hover:text-[#004AAD] transition-colors duration-200"
        >
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
