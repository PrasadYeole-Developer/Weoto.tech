import Image from "next/image";
import React, { useRef } from "react";
import Link from "next/link";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/all";

const Services = () => {
  gsap.registerPlugin(ScrollTrigger);
  const services = useRef();
  const servicesContainer = useRef();
  useGSAP(() => {
    gsap
      .timeline({
        scrollTrigger: {
          trigger: servicesContainer.current,
          start: "top 70%",
          end: "bottom top",
          scrub: true,
        },
      })
      .fromTo(
        services.current,
        { opacity: 0, yPercent: -200, duration: 0.5, ease: "expo.out" },
        { opacity: 2, yPercent: 0 }
      );
  }, []);
  const servicesData = [
    {
      title: "Web Development",
      description:
        "Web development can range from developing a simple single static page of plain text to complex Web-based Internet applications, electronic businesses, and social network services and many more..",
      image: "/web-dev.png",
      route: "/services/web-dev",
    },
    {
      title: "Mobile App Development",
      description:
        "We develop mobile apps for mobile devices, such as personal digital assistants, enterprise digital assistants or mobile phones.",
      image: "/mobile-dev.png",
      route: "/services/mobile-dev",
    },
    {
      title: "E-commerce",
      description:
        "Our eCommerce website development services help deliver a comprehensive and effective e-business strategy. Making your business available online is crucial to your business development such as, highly convenience, wide exposure, global customer etc.",
      image: "/ecommerce-dev.png",
      route: "/services/e-commerce",
    },
    {
      title: "DevOps",
      description:
        "DevOps is a set of practices that combines software development and IT operations. It aims to shorten the systems development life cycle and provide continuous delivery with high software quality.",
      image: "/fintech-dev.png",
      route: "/services/devops",
    },
    {
      title: "Blockchain",
      description:
        "Whether you want to develop peer-to-peer decentralized applications, enterprise dApps or self-executing smart contracts, we will help you deliver custom blockchain development services.",
      image: "/blockchain-dev.png",
      route: "/services/blockchain",
    },
    {
      title: "AI and Machine Learning",
      description:
        'While machine learning is based on the idea that machines should be able to learn and adapt through experience, AI refers to a broader idea where machines can execute tasks "smartly." Artificial Intelligence applies machine learning, deep learning and other techniques to solve actual problems.',
      image: "/machine-learning-dev.png",
      route: "/services/machine-learning",
    },
  ];
  return (
    <div className="w-full bg-blue-100 min-h-screen" ref={servicesContainer}>
      <div className="container mx-auto px-4 py-12">
        <div className="overflow-hidden">
          <h3
            ref={services}
            className="scroll-m-20 text-4xl font-semibold tracking-tight text-center mt-12 mb-6"
          >
            Our Services
          </h3>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
          {servicesData.map((service) => (
            <div
              key={service.title}
              className="group transition-all duration-300 h-full flex"
            >
              <Link
                href={service.route}
                className="bg-white text-[#020023] p-8 rounded shadow-none flex flex-col items-start h-full min-h-[500px] w-full transform transition-all duration-300 group-hover:scale-105 group-hover:shadow-2xl"
              >
                <Image
                  src={service.image}
                  alt={service.title}
                  width={400}
                  height={250}
                  className="w-full h-40 object-contain rounded-xl mb-12 transition-all duration-300"
                />
                <h4 className="text-3xl font-semibold mb-4 text-left w-full">
                  {service.title}
                </h4>
                <p className="mb-4 flex-1 text-left w-full">
                  {service.description}
                </p>
                <div className="w-full flex justify-start mt-auto">
                  <span className="underline underline-offset-2 text-lg hover:underline-offset-3 text-[#222222]">
                    Read More
                  </span>
                </div>
              </Link>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Services;
