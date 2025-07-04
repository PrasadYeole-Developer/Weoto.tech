"use client";
import React, { useEffect, useRef } from "react";
import "lenis/dist/lenis.css";
import Lenis from "lenis";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/all";

const Home = () => {
  const h1Ref = useRef(null);
  gsap.registerPlugin(ScrollTrigger);

  useEffect(() => {
    const lenis = new Lenis({
      smooth: true,
      duration: 1.2,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
    });

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
      ScrollTrigger.kill();
    };
  }, []);

  useGSAP(() => {
    gsap
      .timeline({
        scrollTrigger: {
          trigger: h1Ref.current,
          start: "top center",
          end: "bottom top",
          scrub: true,
        },
      })
      .fromTo(h1Ref.current, { scale: 1 }, { scale: 2 });
  }, []);

  return (
    <main>
      <div className="w-full h-screen bg-black"></div>
    </main>
  );
};

export default Home;
