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
      image: "https://images.pexels.com/photos/11035380/pexels-photo-11035380.jpeg?auto=compress&cs=tinysrgb&w=800",
      route: "/services/web-dev",
    },
    {
      title: "Mobile App Development",
      description:
        "We develop mobile apps for mobile devices, such as personal digital assistants, enterprise digital assistants or mobile phones.",
      image: "https://images.pexels.com/photos/147413/twitter-facebook-together-exchange-of-information-147413.jpeg?auto=compress&cs=tinysrgb&w=800",
      route: "/services/mobile-dev",
    },
    {
      title: "E-commerce",
      description:
        "Our eCommerce website development services help deliver a comprehensive and effective e-business strategy. Making your business available online is crucial to your business development such as, highly convenience, wide exposure, global customer etc.",
      image: "https://images.pexels.com/photos/230544/pexels-photo-230544.jpeg?auto=compress&cs=tinysrgb&w=800",
      route: "/services/e-commerce",
    },
    {
      title: "DevOps",
      description:
        "DevOps is a set of practices that combines software development and IT operations. It aims to shorten the systems development life cycle and provide continuous delivery with high software quality.",
      image: "https://images.pexels.com/photos/577585/pexels-photo-577585.jpeg?auto=compress&cs=tinysrgb&w=800",
      route: "/services/devops",
    },
    {
      title: "Blockchain",
      description:
        "Whether you want to develop peer-to-peer decentralized applications, enterprise dApps or self-executing smart contracts, we will help you deliver custom blockchain development services.",
      image: "https://images.pexels.com/photos/844124/pexels-photo-844124.jpeg?auto=compress&cs=tinysrgb&w=800",
      route: "/services/blockchain",
    },
    {
      title: "AI and Machine Learning",
      description:
        'While machine learning is based on the idea that machines should be able to learn and adapt through experience, AI refers to a broader idea where machines can execute tasks "smartly." Artificial Intelligence applies machine learning, deep learning and other techniques to solve actual problems.',
      image: "https://images.pexels.com/photos/8386440/pexels-photo-8386440.jpeg?auto=compress&cs=tinysrgb&w=800",
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
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {servicesData.map((service) => (
            <div
              key={service.title}
              className="group transition-all duration-300 h-full flex"
            >
              <Link
                href={service.route}
                className="bg-white text-[#020023] rounded shadow-md hover:shadow-lg flex flex-col overflow-hidden h-full min-h-[520px] w-full transform transition-all duration-300 group-hover:scale-[1.02] group-hover:-translate-y-2"
              >
                <div className="relative w-full h-56 overflow-hidden">
                  <Image
                    src={service.image}
                    alt={service.title}
                    fill
                    className="object-cover transition-all duration-500 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                </div>
                
                <div className="p-8 flex flex-col flex-1 justify-between">
                  <div className="flex-1">
                    <h4 className="text-2xl font-semibold mb-4 text-left w-full leading-tight">
                      {service.title}
                    </h4>
                    <p className="text-gray-700 leading-relaxed text-left w-full line-clamp-4">
                      {service.description}
                    </p>
                  </div>
                  
                  <div className="w-full flex justify-start mt-6 pt-4 border-t border-gray-100">
                    <span className="inline-flex items-center gap-2 text-lg font-medium text-[#222222] group-hover:text-[#004AAD] transition-colors duration-200">
                      Read More
                      <svg 
                        className="w-4 h-4 transform transition-transform duration-200 group-hover:translate-x-1" 
                        fill="none" 
                        stroke="currentColor" 
                        viewBox="0 0 24 24"
                      >
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                      </svg>
                    </span>
                  </div>
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