import React from "react";
import Navbar from "./Navbar";

const Hero = () => {
  return (
     <div className="w-full h-screen relative bg-[#004bad] text-white overflow-hidden">
      <div className="absolute inset-0 bg-[url('/company_image.webp')] bg-contain bg-center bg-fixed opacity-25 pointer-events-none z-0" />

      <div className="relative z-10">
        <Navbar />
      </div>
    </div>
  );
};

export default Hero;
