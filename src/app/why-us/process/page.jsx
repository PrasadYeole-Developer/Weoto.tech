"use client";
import React from "react";
import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";
import useLenisScroll from "../../components/useLenisScroll";

const Process = () => {
  useLenisScroll();
  return (
    <>
      <Navbar />
      <section
        id="process"
        className="w-full min-h-screen relative flex flex-col items-center"
      >
        <div className="w-full h-[40vh] bg-[#004AAD]"></div>
        <div
          className="w-[90%] max-w-5xl px-4 py-12 bg-white mt-[-20vh] z-[100] shadow-md rounded flex flex-col items-center"
        >
          <h2
            className="text-5xl md:text-6xl font-bold tracking-tight text-center text-[#004AAD] mb-6"
          >
            Our <span className="text-black">Process</span>
          </h2>
          <p className="text-lg md:text-xl text-center text-gray-700 mb-10 max-w-2xl">
            We follow a clear, collaborative, and transparent process to deliver
            innovative solutions tailored to your needs.
          </p>
          <ol className="w-full flex flex-col md:flex-row md:justify-between gap-8">
            <li className="flex-1 flex flex-col items-center">
              <div className="w-16 h-16 rounded-full bg-[#004AAD] text-white flex items-center justify-center text-3xl font-bold mb-4 shadow-lg">
                1
              </div>
              <h3 className="text-xl font-semibold mb-2 text-center">
                Discovery
              </h3>
              <p className="text-center text-gray-600">
                We understand your goals, challenges, and requirements to lay a
                strong foundation.
              </p>
            </li>
            <li className="flex-1 flex flex-col items-center">
              <div className="w-16 h-16 rounded-full bg-[#004AAD] text-white flex items-center justify-center text-3xl font-bold mb-4 shadow-lg">
                2
              </div>
              <h3 className="text-xl font-semibold mb-2 text-center">
                Design & Strategy
              </h3>
              <p className="text-center text-gray-600">
                Our team crafts innovative solutions and a clear roadmap for
                your project.
              </p>
            </li>
            <li className="flex-1 flex flex-col items-center">
              <div className="w-16 h-16 rounded-full bg-[#004AAD] text-white flex items-center justify-center text-3xl font-bold mb-4 shadow-lg">
                3
              </div>
              <h3 className="text-xl font-semibold mb-2 text-center">
                Development
              </h3>
              <p className="text-center text-gray-600">
                We build, test, and refine your product using modern
                technologies and best practices.
              </p>
            </li>
            <li className="flex-1 flex flex-col items-center">
              <div className="w-16 h-16 rounded-full bg-[#004AAD] text-white flex items-center justify-center text-3xl font-bold mb-4 shadow-lg">
                4
              </div>
              <h3 className="text-xl font-semibold mb-2 text-center">
                Delivery & Support
              </h3>
              <p className="text-center text-gray-600">
                We launch your solution and provide ongoing support to ensure
                your continued success.
              </p>
            </li>
          </ol>
        </div>
        <div className="w-full h-[10vh] bg-white"></div>
      </section>
      <Footer />
    </>
  );
};

export default Process;
