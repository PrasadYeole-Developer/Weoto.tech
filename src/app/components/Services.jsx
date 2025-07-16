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
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 cards">
          {servicesData.map((service) => (
            <div
              key={service.title}
              className="group transition-all duration-300 h-full flex card"
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
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M9 5l7 7-7 7"
                        />
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
