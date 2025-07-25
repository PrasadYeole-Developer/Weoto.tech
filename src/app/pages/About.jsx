"use client";
import React from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import useLenisScroll from "../components/useLenisScroll";  

const About = () => {
  useLenisScroll();
  return (
    <>
      <Navbar />
      <section className="w-full min-h-screen bg-[#DBEAFE] text-[#020023] flex items-center justify-center py-16">
        <div className="max-w-7xl w-full mx-auto px-4 md:px-8 flex flex-col md:flex-row-reverse items-center gap-16">
          <div className="flex-1 flex items-center justify-center">
            <img
              src="/about_image.webp"
              alt="Workspace of Weoto"
              className="rounded-xl object-cover w-full max-w-xl h-64 md:h-92 shadow-md"
            />
          </div>
          <div className="flex-1 flex flex-col items-center md:items-start">
            <h1 className="text-4xl md:text-5xl font-bold mb-4 text-center md:text-left">
              About
            </h1>
            <p className="text-[#020023]/80 text-base md:text-md mt-2 text-center md:text-left">
              Weoto is company formed by four enthusiasts to serve businesses
              with their technical expertise. At Weoto, we are on a mission to
              help companies develop competitiveness and agility using the
              software.
              <br />
              Since 2017, Weoto has been delivering exceptional software
              development services. We have identified great problem solvers
              with passion and drive, and they are part of our team now. We
              deliver end-to-end software development, quality assurance and
              support solutions to clients.
            </p>
          </div>
        </div>
      </section>
      <Footer />
    </>
  );
};

export default About;
