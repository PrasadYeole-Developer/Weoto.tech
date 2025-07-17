"use client";
import React from "react";
import Navbar from "./Navbar";
import Footer from "./Footer";
import useLenisScroll from "./useLenisScroll";

const About = () => {
  useLenisScroll();
  return (
    <>
      <Navbar />
      <section className="w-full min-h-screen bg-[#DBEAFE] text-black flex items-center justify-center py-16">
        <div className="max-w-5xl w-full mx-auto px-4 md:px-8 flex flex-col md:flex-row items-center gap-12">
          <div className="flex-1 flex flex-col items-center md:items-start">
            <h1 className="text-4xl md:text-5xl font-bold mb-4 text-center md:text-left">About</h1>
            <p className="text-gray-600 text-base md:text-lg mt-2 text-center md:text-left">
              Weoto is a company formed by four enthusiasts to serve businesses with their technical expertise. We aim to help companies gain competitiveness and agility through software solutions.
            </p>
          </div>
          <div className="flex-1 flex items-center justify-center">
            <img
              src="https://images.unsplash.com/photo-1519389950473-47ba0277781c?auto=format&fit=crop&w=1000&q=80"
              alt="Teamwork at work"
              className="rounded-xl object-cover w-full max-w-md h-64 md:h-80 shadow-lg"
            />
          </div>
        </div>
      </section>
      <Footer />
    </>
  );
};

export default About;
