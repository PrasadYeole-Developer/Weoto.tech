"use client";
import React from "react";
import Weoto from "../components/Weoto";
import useLenisScroll from "../components/useLenisScroll";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

const WhyUs = () => {
  useLenisScroll();
  return (
    <>
      <Navbar />
      <Weoto />
      <Footer />
    </>
  );
};

export default WhyUs;
