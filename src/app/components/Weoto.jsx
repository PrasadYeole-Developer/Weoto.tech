import React, { useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/all";
import { useGSAP } from "@gsap/react";
import Edges from "./Edges";

const Weoto = () => {
  gsap.registerPlugin(ScrollTrigger);
  const benefits = useRef();
  const benefitsContainer = useRef();
  useGSAP(() => {
    gsap
      .timeline({
        scrollTrigger: {
          trigger: benefitsContainer.current,
          start: "top center",
          end: "bottom top",
          scrub: true,
        },
      })
      .fromTo(
        benefits.current,
        { opacity: 0, yPercent: -170, duration: 2.5, ease: "expo.out" },
        { opacity: 2, yPercent: 0 }
      );
  }, []);

  return (
    <section
      id="weoto"
      className="w-full min-h-screen relative flex flex-col items-center"
    >
      <div className="blue w-full h-[45vh] bg-[#004AAD]"></div>
      <div
        ref={benefitsContainer}
        className="w-[86%] px-[0rem] py-[8rem] bg-white mt-[-25vh] z-[100] shadow-lg benifits"
      >
        <h2 className="scroll-m-20 pb-2 text-6xl font-semibold tracking-tight first:mt-0 text-center">
          We only <span className="text-[#004AAD]">Create</span> what we really
          good at
        </h2>
        <p className="leading-7 text-md [&:not(:first-child)]:mt-6 text-center">
          We develop innovative and creative products and services that provide
          total communication and information solutions.
        </p>
        <div className="overflow-hidden mt-8">
          <h3
            ref={benefits}
            className="scroll-m-20 text-4xl font-semibold tracking-tight text-center mt-12"
          >
            Experience the Weoto Edge{" "}
          </h3>
        </div>
        <Edges />
      </div>
      <div className="w-full h-[10vh] bg-white"></div>
    </section>
  );
};

export default Weoto;
