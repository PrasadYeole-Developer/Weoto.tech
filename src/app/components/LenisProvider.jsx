"use client";
import React from "react";
import useLenisScroll from "../components/useLenisScroll";

const LenisProvider = ({ children }) => {
  useLenisScroll();
  return <>{children}</>;
};

export default LenisProvider;
