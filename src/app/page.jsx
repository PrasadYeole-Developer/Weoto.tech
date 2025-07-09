"use client";
import React, { useEffect, useRef } from "react";
import "lenis/dist/lenis.css";
import Lenis from "lenis";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/all";
import Hero from "./components/Hero";
import Weoto from "./components/Weoto";
import Services from "./components/Services";

const Home = () => {
  gsap.registerPlugin(ScrollTrigger);
  useEffect(() => {
    const lenis = new Lenis({
      smooth: true,
      duration: 1.2,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
    });

    window.lenis = lenis;

    function raf(time) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }

    requestAnimationFrame(raf);

    ScrollTrigger.scrollerProxy(document.body, {
      scrollTop(value) {
        return value !== undefined ? lenis.scrollTo(value) : window.scrollY;
      },
      getBoundingClientRect() {
        return {
          top: 0,
          left: 0,
          width: window.innerWidth,
          height: window.innerHeight,
        };
      },
      pinType: document.body.style.transform ? "transform" : "fixed",
    });

    lenis.on("scroll", ScrollTrigger.update);
    ScrollTrigger.defaults({ scroller: document.body });
    ScrollTrigger.refresh();

    return () => {
      lenis.destroy();
      ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
    };
  }, []);

  return (
    <main className="w-full min-h-screen select-none">
      <Hero />
      <Weoto />
      <Services />
    </main>
  );
};

export default Home;
