import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/all";
import React from "react";

const Edges = () => {
  gsap.registerPlugin(ScrollTrigger);
  useGSAP(() => {
    gsap.utils.toArray(".edge-left").forEach((el) => {
      gsap.from(el, {
        scrollTrigger: {
          trigger: el,
          start: "top 95%",
          end: "bottom 60%",
          scrub: true,
        },
        xPercent: -150,
        opacity: 0,
        duration: 0.6,
        ease: "sine.out",
      });
    }, "edges");

    gsap.utils.toArray(".edge-right").forEach((el) => {
      gsap.from(el, {
        scrollTrigger: {
          trigger: el,
          start: "top 95%",
          end: "bottom 60%",
          scrub: true,
        },
        xPercent: 150,
        opacity: 0,
        duration: 0.6,
        ease: "sine.out",
      });
    }, "edges");
  }, []);

  return (
    <div className="space-y-16 overflow-hidden">
      <div className="flex flex-col md:flex-row items-center justify-center gap-8 md:gap-16 px-6 pt-12">
        <div className="w-full md:w-1/2 flex justify-center">
          <img
            src="/roadmap.png"
            alt="Tech roadmap"
            className="max-w-xs md:max-w-md object-contain edge-left"
          />
        </div>

        <div className="edge-right w-full md:w-1/2 text-center md:text-left lg:mr-16">
          <h2 className="text-3xl md:text-4xl font-semibold text-[#004AAD] mb-8">
            We build a tech delivery roadmap to align with your goals
          </h2>
          <p className="text-lg text-gray-700">
            We co-create apps by understanding your business needs first. We
            identify processes that can be streamlined and build a tech delivery
            roadmap to align with your goals.
          </p>
        </div>
      </div>

      <div className="flex flex-col md:flex-row items-center justify-center gap-8 md:gap-16 px-6 pt-12">
        <div className="w-full md:w-1/2 flex justify-center">
          <img
            src="/process.png"
            alt="Collaboration"
            className="max-w-xs md:max-w-md object-contain edge-left"
          />
        </div>

        <div className="edge-right w-full md:w-1/2 text-center md:text-left lg:mr-16">
          <h2 className="text-3xl md:text-4xl font-semibold text-[#004AAD] mb-8">
            Seamless collaboration from idea to execution
          </h2>
          <p className="text-lg text-gray-700">
            We believe in transparent communication and real-time collaboration
            with clients to ensure the vision is translated into impactful
            digital products.
          </p>
        </div>
      </div>

      <div className="flex flex-col md:flex-row items-center justify-center gap-8 md:gap-16 px-6 pt-12">
        <div className="w-full md:w-1/2 flex justify-center">
          <img
            src="/team.png"
            alt="Future-ready"
            className="max-w-xs md:max-w-md object-contain edge-left"
          />
        </div>

        <div className="edge-right w-full md:w-1/2 text-center md:text-left lg:mr-16">
          <h2 className="text-3xl md:text-4xl font-semibold text-[#004AAD] mb-8">
            Future-ready solutions that scale with you
          </h2>
          <p className="text-lg text-gray-700">
            From MVP to enterprise-grade apps, our tech stack and architecture
            ensure you're ready to grow, adapt, and lead your industry forward.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Edges;
