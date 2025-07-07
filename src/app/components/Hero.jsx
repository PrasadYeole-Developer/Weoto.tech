"use client";
import React, { useRef } from "react";
import Navbar from "./Navbar";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";

const Hero = () => {
  const image = useRef();
  const btnRef = useRef();
  useGSAP(() => {
    gsap.from(image.current, {
      opacity: 0,
      duration: 1,
      delay: 1,
    });
  }, []);
  return (
    <div className="w-full h-screen relative bg-[#020023] text-white overflow-hidden">
      <button
        ref={btnRef}
        onClick={() => {
          const target = document.querySelector("#weoto");
          if (target && window.lenis) {
            window.lenis.scrollTo(target);
          }
        }}
        className="absolute bottom-6 left-1/2 transform -translate-x-1/2 w-20 h-20 border-2 border-white rounded-full flex items-center justify-center text-white hover:scale-105 transition duration-300 cursor-pointer"
        aria-label="Scroll Down"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-8 w-8"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          strokeWidth="2"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M19 9l-7 7-7-7"
          />
        </svg>
      </button>

      <div
        ref={image}
        className="absolute inset-0 bg-[url('/company_image.webp')] bg-contain bg-center bg-fixed opacity-18 pointer-events-none z-0"
      />

      <div className="relative z-10">
        <Navbar />
      </div>
    </div>
  );
};

export default Hero;
