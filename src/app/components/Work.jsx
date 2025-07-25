import Image from "next/image";
import React, { useRef } from "react";
import Link from "next/link";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/all";

const Works = () => {
  gsap.registerPlugin(ScrollTrigger);
  const works = useRef();
  const worksContainer = useRef();
  useGSAP(() => {
    gsap.utils.toArray(".card").forEach((el, i) => {
      gsap.from(el, {
        scrollTrigger: {
          trigger: el,
          start: "top 95%",
          end: "bottom bottom",
          scrub: true,
        },
        yPercent: 10,
        opacity: 0,
        duration: 1,
        delay: i * 0.05,
        ease: "back.inOut",
      });
    });

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
      title: "B2B Ecommerce",
      description:
        "Robust B2B ecommerce solutions tailored for seamless business transactions, scalable catalogs, and custom workflows.",
      image:
        "https://images.pexels.com/photos/6347727/pexels-photo-6347727.jpeg?auto=compress&cs=tinysrgb&w=800",
      route: "/services/b2b-ecommerce",
    },
    {
      title: "Custom Software",
      description:
        "End-to-end custom software development to solve unique business challenges and drive digital transformation.",
      image:
        "https://images.pexels.com/photos/3861969/pexels-photo-3861969.jpeg?auto=compress&cs=tinysrgb&w=800",
      route: "/services/custom-software",
    },
    {
      title: "Mobile App",
      description:
        "Design and development of high-performance mobile applications for iOS and Android to engage your customers anywhere.",
      image:
        "https://images.pexels.com/photos/607812/pexels-photo-607812.jpeg?auto=compress&cs=tinysrgb&w=800",
      route: "/services/mobile-app",
    },
    {
      title: "SaaS ERP",
      description:
        "Cloud-based ERP solutions for streamlined operations, real-time analytics, and scalable business management.",
      image:
        "https://images.pexels.com/photos/1181675/pexels-photo-1181675.jpeg?auto=compress&cs=tinysrgb&w=800",
      route: "/services/saas-erp",
    },
    {
      title: "Cloud Services",
      description:
        "Comprehensive cloud and DevOps services for secure, scalable, and efficient infrastructure management.",
      image:
        "https://images.pexels.com/photos/325185/pexels-photo-325185.jpeg?auto=compress&cs=tinysrgb&w=800",
      route: "/services/cloud-devops",
    },
    {
      title: "Supply Chain",
      description:
        "Advanced supply chain solutions to optimize logistics, inventory, and end-to-end visibility for your business.",
      image:
        "https://images.pexels.com/photos/1797428/pexels-photo-1797428.jpeg?auto=compress&cs=tinysrgb&w=800",
      route: "/services/supply-chain",
    },
  ];

  return (
    <div className="w-full bg-[#020023] text-white min-h-screen" ref={worksContainer}>
      <div className="container mx-auto px-4 py-12">
        <div className="overflow-hidden">
          <h3
            ref={works}
            className="scroll-m-20 text-4xl font-semibold tracking-tight text-center mt-24 md:mt-12 mb-8"
          >
            Our Work
          </h3>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 cards"></div>
      </div>
    </div>
  );
};

export default Works;
