"use client";
import React from "react";
import Services from "../pages/Services";
import useLenisScroll from "../components/useLenisScroll";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

const ServicesPage = () => {
  useLenisScroll();
  return (
    <>
      <Navbar />
      <div className="py-16 bg-[#DBEAFE]">
        <Services />
      </div>
      <Footer />
    </>
  );
};

export default ServicesPage;
