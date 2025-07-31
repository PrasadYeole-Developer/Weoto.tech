import Image from "next/image";
import React, { useRef } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/all";

const Testimonials = () => {
  gsap.registerPlugin(ScrollTrigger);
  const testimonials = useRef();
  const testimonialsContainer = useRef();
  useGSAP(() => {
    gsap
      .timeline({
        scrollTrigger: {
          trigger: testimonialsContainer.current,
          start: "top 70%",
          end: "bottom top",
          scrub: true,
        },
      })
      .fromTo(
        testimonials.current,
        { opacity: 0, yPercent: -100, ease: "power4.out" },
        { opacity: 2, yPercent: 0 }
      );
  }, []);

  const data = [];

  return (
    <div
      className="w-full bg-[#020023] text-white min-h-screen"
      ref={testimonialsContainer}
    >
      <div className="container mx-auto px-4 py-12">
        <div className="overflow-hidden">
          <h3
            ref={testimonials}
            className="scroll-m-20 text-4xl font-semibold tracking-tight text-center mt-24 md:mt-12 mb-8"
          >
            Testimonials
          </h3>
        </div>
        <div></div>
      </div>
    </div>
  );
};

export default Testimonials;
