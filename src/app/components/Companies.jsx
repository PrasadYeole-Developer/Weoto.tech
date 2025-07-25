"use client";
import React from "react";
import { motion } from "framer-motion";

const logos = [
  "https://upload.wikimedia.org/wikipedia/commons/4/44/Microsoft_logo.svg",
  "https://upload.wikimedia.org/wikipedia/commons/f/fa/Apple_logo_black.svg",
  "https://upload.wikimedia.org/wikipedia/commons/5/51/IBM_logo.svg",
  "https://upload.wikimedia.org/wikipedia/commons/2/2f/Google_2015_logo.svg",
  "https://upload.wikimedia.org/wikipedia/commons/0/08/Netflix_2015_logo.svg",
];
const Companies = () => {
  return (
    <div className="overflow-hidden w-full bg-[#222222] py-12 px-6">
      <motion.div
        className="flex gap-24"
        animate={{ x: ["0%", "-100%"] }}
        transition={{
          duration: 12,
          ease: "linear",
          repeat: Infinity,
        }}
      >
        {logos.map((logo, i) => (
          <img
            key={i}
            src={logo}
            alt={`logo-${i}`}
            className="h-8 sm:h-10 lg:h-12 w-auto object-contain grayscale hover:grayscale-0 transition duration-300"
          />
        ))}
        {logos.map((logo, i) => (
          <img
            key={i}
            src={logo}
            alt={`logo-${i}`}
            className="h-8 sm:h-10 lg:h-12 w-auto object-contain grayscale hover:grayscale-0 transition duration-300"
          />
        ))}
        {logos.map((logo, i) => (
          <img
            key={i}
            src={logo}
            alt={`logo-${i}`}
            className="h-8 sm:h-10 lg:h-12 w-auto object-contain grayscale hover:grayscale-0 transition duration-300"
          />
        ))}
      </motion.div>
    </div>
  );
};

export default Companies;
