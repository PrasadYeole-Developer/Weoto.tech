import Image from "next/image";
import React, { useRef } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/all";

const Works = () => {
  gsap.registerPlugin(ScrollTrigger);
  const works = useRef();
  const worksContainer = useRef();
  useGSAP(() => {
    gsap
      .timeline({
        scrollTrigger: {
          trigger: worksContainer.current,
          start: "top 70%",
          end: "bottom top",
          scrub: true,
        },
      })
      .fromTo(
        works.current,
        { opacity: 0, yPercent: -100, duration: 0.5, ease: "power4.out" },
        { opacity: 2, yPercent: 0 }
      );
  }, []);

  const work = [
    {
      title: "Tata Motors-E-Dukan",
      type: "Web, ECommerce",
      description:
        "Tata Motors-E-Dukan is Tata Motors' web platform, eCommerce site, which is available for ordering spare parts.",
      image: "/tatamotorsedukaan.png",
      techStack: ["Angular"],
    },
    {
      title: "ScrapDeal",
      type: "Mobile",
      description:
        "ScrapDeal is a platform to sell your scrap in most easiest way. You can sell paper scrap, old clothes, old shoes, metals, old tyres, plastic waste, PET Bottles, E-waste and any kind of recyclable miscellaneous waste with ease.",
      image: "/scrapdeal.png",
      techStack: ["Ionic", "Python", "Angular"],
    },
    {
      title: "SyncFab",
      type: "Web",
      description:
        "SyncFab blockchain platform allows OEM Purchasing and Engineering Departments to source, procure, track, secure, and pay for precision parts. We have buid the UI end for this platform",
      image: "/syncfab.png",
      techStack: ["Blockchain", "React.js"],
    },
    {
      title: "Indotrux",
      type: "Web",
      description:
        "A platform to buy and sell, used or new trucks. This site serves catalog of used and new trucks, option to compare models, find truck dealers and suggest Insurance options.",
      image: "/indotrux.png",
      techStack: ["Angular"],
    },
    {
      title: "Tractor Dost",
      type: "Web, Mobile",
      description:
        "A web app to get tractor specs, comparison, best offers and much more. TractorDost is the amalgamation of Farming Knowledge, Technology and Marketing.",
      image: "/tractordost.png",
      techStack: ["Angular", "Node JS", "MongoDB"],
    },
    {
      title: "Bullbets",
      type: "Mobile",
      description:
        "It consists of a web app managed by admin to share trading recommendations. At the end user end there is a mobile app to receive the recommendation and manage the trading history.",
      image: "/bullbets.png",
      techStack: ["React", "React Native", "Nest JS", "MongoDB"],
    },
    {
      title: "Tamasha",
      type: "Mobile",
      description:
        "A betting mobile App. An Influencer hosted live real money game show platform.",
      image: "/tamasha.png",
      techStack: ["Ionic", "Node JS"],
    },
  ];

  return (
    <div
      className="w-full bg-[#020023] text-white min-h-screen"
      ref={worksContainer}
    >
      <div className="container mx-auto px-4 py-12">
        <div className="overflow-hidden">
          <h3
            ref={works}
            className="scroll-m-20 text-4xl font-semibold tracking-tight text-center mt-24 md:mt-12 mb-12"
          >
            Our Work
          </h3>
        </div>
        <div className="relative z-10">
          <div className="grid gap-12 md:grid-cols-2 lg:grid-cols-3">
            {work.map((item, idx) => (
              <div
                key={idx}
                className="group transition-all duration-300 h-full flex card"
              >
                <div className="bg-white text-[#020023] rounded flex flex-col overflow-hidden h-full min-h-[520px] w-full transition-all duration-300 group-hover:scale-[1.02] group-hover:-translate-y-2">
                  <div className="relative w-full h-56 overflow-hidden">
                    <Image
                      src={item.image}
                      alt={item.title}
                      fill
                      className="object-cover transition-all duration-500 group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  </div>
                  <div className="p-8 flex flex-col flex-1 justify-between">
                    <div className="flex-1">
                      <div className="flex items-center gap-2 mb-2">
                        <span className="inline-block px-3 py-1 text-xs font-semibold rounded-full bg-[#DBEAFE] text-[#020023] uppercase tracking-wider mb-2">
                          {item.type}
                        </span>
                      </div>
                      <h4 className="text-2xl font-semibold mb-4 text-left w-full leading-tight">
                        {item.title}
                      </h4>
                      <p className="text-gray-700 leading-relaxed text-left w-full line-clamp-4">
                        {item.description}
                      </p>
                    </div>
                    <div className="flex flex-wrap gap-2 mt-6 pt-4 border-t border-gray-100">
                      {item.techStack.map((tech, i) => (
                        <span
                          key={i}
                          className="inline-block px-2 py-1 text-xs font-medium rounded bg-[#020023] text-white"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Works;
