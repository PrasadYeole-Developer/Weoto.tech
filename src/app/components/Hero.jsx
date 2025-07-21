"use client";
import React, { useRef } from "react";
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
      <div className="div w-full min-h-screen flex flex-col items-center justify-center gap-4 px-4 sm:px-8">
        <h1 className="scroll-m-20 text-center text-4xl sm:text-5xl md:text-6xl lg:text-7xl uppercase font-extrabold tracking-tight text-balance px-2 sm:px-8 leading-tight">
          We Create Experiences <br className="hidden sm:block" />
          that Resonate.
        </h1>
        <p className="leading-7 mt-2 text-base text-center">
          We are a team of developers who are passionate about creating
          innovative solutions for our clients.
        </p>
      </div>
      <div className="absolute bottom-6 left-1/2 -translate-x-1/2 flex justify-center items-center w-full pointer-events-none z-10">
        <button
          ref={btnRef}
          onClick={() => {
            window.lenis.scrollTo("#weoto");
          }}
          className="animate-bounce w-20 h-20 border-2 border-white rounded-full flex items-center justify-center text-white hover:scale-140 transition duration-300 cursor-pointer pointer-events-auto"
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
        className="absolute inset-0 bg-[url('https://images.pexels.com/photos/3184291/pexels-photo-3184291.jpeg?auto=compress&w=1500&q=80')] bg-cover bg-no-repeat bg-center bg-fixed opacity-20 pointer-events-none z-0"
      />
    </div>
  );
};

export default Hero;
