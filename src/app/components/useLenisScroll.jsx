"use client";
import React, { useEffect } from "react";
import Lenis from "lenis";
import { ScrollTrigger } from "gsap/all";
import gsap from "gsap";

gsap.registerPlugin(ScrollTrigger);

const useLenisScroll = () => {
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

    const resizeObserver = new ResizeObserver(() => {
      ScrollTrigger.refresh();
    });
    resizeObserver.observe(document.body);

    ScrollTrigger.refresh();

    return () => {
      lenis.destroy();
      ScrollTrigger.getAll().forEach((t) => t.kill());
      resizeObserver.disconnect();
    };
  }, []);
};

export default useLenisScroll;
