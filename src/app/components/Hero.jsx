"use client";
import React, { useRef } from "react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import Link from "next/link";
import "remixicon/fonts/remixicon.css";

const Hero = () => {
  const image = useRef();
  const btnRef = useRef();
  const heroText = useRef();
  useGSAP(() => {
    gsap.from(image.current, {
      opacity: 0,
      duration: 1,
      delay: 1,
    });
    gsap.from(heroText.current, {
      y: 50,
      opacity: 0,
      duration: 0.5,
      delay: 0.8,
    });
  }, []);
  return (
    <div className="w-full h-screen relative bg-[#020023] text-white overflow-hidden">
      <div
        className="div w-full min-h-screen flex flex-col items-center justify-center gap-4 px-4 sm:px-8 overflow-hidden"
        ref={heroText}
      >
        <h1 className="scroll-m-20 text-center text-4xl sm:text-5xl md:text-6xl lg:text-7xl uppercase font-extrabold tracking-tight text-balance px-2 sm:px-8 leading-tight">
          We Create Experiences <br className="hidden sm:block" />
          that Resonate
        </h1>
        <p className="leading-7 mt-2 text-white/70 text-md text-center">
          We are a team of developers who are passionate about creating
          innovative solutions for our clients.
        </p>
        <Link
          href="https://calendly.com/YOUR_USERNAME"
          target="_blank"
          className="border-none rounded-xs font-sans font-bold flex gap-2 tracking-wide items-center justify-center my-8 py-2.5 px-5 cursor-pointer bg-[#006eff] text-white active:scale-[0.98] hover:bg-white hover:text-[#020023] transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed"
          aria-label="Schedule a Call"
        >
          Schedule a Call <i className="ri-phone-fill"></i>
        </Link>
      </div>
      <div className="absolute bottom-6 left-1/2 -translate-x-1/2 flex justify-center items-center w-full pointer-events-none z-10">
        <button
          ref={btnRef}
          onClick={() => {
            window.lenis.scrollTo("#weoto");
          }}
          className="animate-bounce w-20 h-20 border-2 border-white rounded-full flex items-center justify-center text-white hover:scale-140 transition duration-300 pointer-events-auto"
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
      </div>

      <div
        ref={image}
        className="absolute inset-0 bg-[url('https://images.pexels.com/photos/3182763/pexels-photo-3182763.jpeg?auto=compress&w=1500&q=80')] bg-cover bg-no-repeat bg-center bg-fixed opacity-20 pointer-events-none z-0"
      />
    </div>
  );
};

export default Hero;
