"use client";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import Link from "next/link";
import React, { useEffect, useRef, useState } from "react";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu";
import { HiMenu, HiX } from "react-icons/hi";

const services = [
  {
    title: "B2B Ecommerce",
    href: "/services/b2b-ecommerce",
    description:
      "Robust B2B ecommerce solutions tailored for seamless business transactions, scalable catalogs, and custom workflows.",
  },
  {
    title: "Custom Software",
    href: "/services/custom-software",
    description:
      "End-to-end custom software development to solve unique business challenges and drive digital transformation.",
  },
  {
    title: "Mobile App",
    href: "/services/mobile-app",
    description:
      "Design and development of high-performance mobile applications for iOS and Android to engage your customers anywhere.",
  },
  {
    title: "SaaS ERP",
    href: "/services/saas-erp",
    description:
      "Cloud-based ERP solutions for streamlined operations, real-time analytics, and scalable business management.",
  },
  {
    title: "Cloud Services",
    href: "/services/cloud-devops",
    description:
      "Comprehensive cloud and DevOps services for secure, scalable, and efficient infrastructure management.",
  },
  {
    title: "Supply Chain",
    href: "/services/supply-chain",
    description:
      "Advanced supply chain solutions to optimize logistics, inventory, and end-to-end visibility for your business.",
  },
];

const Navbar = () => {
  const h2 = useRef();
  const links = useRef();
  const mobileLinks = useRef();
  const [isOpen, setIsOpen] = useState(false);
  useGSAP(() => {
    const navTL = gsap.timeline();
    navTL
      .from(
        h2.current,
        {
          opacity: 0,
          yPercent: -380,
          duration: 0.8,
          ease: "power3.inOut",
        },
        "nav"
      )
      .from(
        links.current,
        {
          opacity: 0,
          duration: 0.7,
          ease: "power3.in",
        },
        "0.4"
      );
  }, []);
  useEffect(() => {
    if (!mobileLinks.current) return;

    if (isOpen) {
      gsap.fromTo(
        mobileLinks.current,
        { xPercent: -100, opacity: 0, display: "none" },
        {
          xPercent: 0,
          opacity: 1,
          display: "flex",
          duration: 0.5,
          ease: "power3.out",
        }
      );
    } else {
      gsap.to(mobileLinks.current, {
        xPercent: -100,
        opacity: 0,
        display: "none",
        duration: 0.5,
        ease: "power3.in",
      });
    }
  }, [isOpen]);
  return (
    <nav className="w-full px-12 lg:px-[7rem] py-[0.7rem] flex items-center justify-between fixed text-[#020023] bg-white overflow z-[100] select-none">
      <div className="left z-[100]">
        <h2
          ref={h2}
          onClick={() => (window.location.href = "/")}
          className="scroll-m-20 border-b border-[#020023] pb-2 text-3xl font-semibold tracking-wide cursor-pointer"
        >
          WEOTO{" "}
        </h2>
      </div>
      <div className="right flex lg:hidden z-[100]">
        <button onClick={() => setIsOpen(!isOpen)}>
          {isOpen ? (
            <HiX className="text-2xl cursor-pointer" />
          ) : (
            <HiMenu className="text-2xl cursor-pointer" />
          )}
        </button>
      </div>
      <div
        ref={mobileLinks}
        className={`mobile-links lg:hidden flex flex-col w-full h-[94vh] absolute top-0 left-0 bg-white z-[300] px-4 py-6 mt-[6vh] ${
          isOpen ? "" : "hidden"
        }`}
      >
        <div className="flex-1 space-y-1">
          <div>
            <Link
              href="/"
              className="flex items-center text-base font-bold uppercase py-3 px-4 rounded-xl transition-all duration-200 border border-transparent"
            >
              <span className="text-gray-800 transition-colors duration-200">
                Home
              </span>
            </Link>
          </div>
          <div>
            <Link
              href="/about"
              className="flex items-center text-base font-bold uppercase py-3 px-4 rounded-xl transition-all duration-200 border border-transparent"
            >
              <span className="text-gray-800 transition-colors duration-200">
                About
              </span>
            </Link>
          </div>
          <div>
            <Link
              href="/about/careers"
              className="flex items-center text-base font-bold uppercase py-3 px-4 rounded-xl transition-all duration-200 border border-transparent"
            >
              <span className="text-gray-800 transition-colors duration-200">
                Careers
              </span>
            </Link>
          </div>
          <div>
            <Link
              href="/services"
              className="flex items-center text-base font-bold uppercase py-3 px-4 rounded-xl transition-all duration-200 border border-transparent"
            >
              <span className="text-gray-800 transition-colors duration-200">
                Services
              </span>
            </Link>
          </div>
          <div>
            <Link
              href="/industries"
              className="flex items-center text-base font-bold uppercase py-3 px-4 rounded-xl transition-all duration-200 border border-transparent"
            >
              <span className="text-gray-800 transition-colors duration-200">
                Industries
              </span>
            </Link>
          </div>
          <div>
            <Link
              href="/insights"
              className="flex items-center text-base font-bold uppercase py-3 px-4 rounded-xl transition-all duration-200 border border-transparent"
            >
              <span className="text-gray-800 transition-colors duration-200">
                Insights
              </span>
            </Link>
          </div>
          <div>
            <Link
              href="/why-us"
              className="flex items-center text-base font-bold uppercase py-3 px-4 rounded-xl transition-all duration-200 border border-transparent"
            >
              <span className="text-gray-800 transition-colors duration-200">
                Why Us
              </span>
            </Link>
          </div>
          <div className="mt-12 flex justify-center">
            <Link
              href="/contact"
              className="text-lg font-extrabold uppercase py-3 px-8 rounded bg-[#004AAD] text-white shadow-lg active:scale-[0.98] transition-all duration-200"
            >
              Contact Us
            </Link>
          </div>
        </div>
      </div>

      <div
        ref={links}
        className="links hidden lg:flex gap-[0.5rem] text-sm font-semibold font-sans items-center"
      >
        <NavigationMenu className="relative list-none ">
          <NavigationMenuItem>
            <NavigationMenuLink
              asChild
              className={navigationMenuTriggerStyle()}
            >
              <Link
                href="/"
                className="uppercase hover:text-[#004AAD] transition-colors duration-200 font-semibold text-sm"
              >
                Home
              </Link>
            </NavigationMenuLink>
          </NavigationMenuItem>
        </NavigationMenu>
        <NavigationMenu className="relative">
          <NavigationMenuList>
            <NavigationMenuItem>
              <NavigationMenuTrigger className="uppercase hover:text-[#004AAD] transition-colors duration-200 cursor-pointer font-semibold text-sm">
                About
              </NavigationMenuTrigger>
              <NavigationMenuContent>
                <ul className="grid w-[200px] gap-4">
                  <li>
                    <NavigationMenuLink asChild>
                      <Link href="/about/vision-mission">
                        Our Vision and Mission
                      </Link>
                    </NavigationMenuLink>
                    <NavigationMenuLink asChild>
                      <Link href="/about/careers">Careers</Link>
                    </NavigationMenuLink>
                  </li>
                </ul>
              </NavigationMenuContent>
            </NavigationMenuItem>
          </NavigationMenuList>

          <NavigationMenuList>
            <NavigationMenuItem>
              <NavigationMenuTrigger className="uppercase hover:text-[#004AAD] transition-colors duration-200 cursor-pointer font-semibold text-sm">
                Services
              </NavigationMenuTrigger>
              <NavigationMenuContent className="absolute left-0 mt-2">
                <div className="grid w-[400px] gap-2 md:w-[500px] md:grid-cols-2 lg:w-[600px]">
                  {services.map((service) => (
                    <NavigationMenuLink asChild key={service.title}>
                      <Link
                        title={service.title}
                        href={service.href}
                        className="block px-4 py-2 rounded-md hover:bg-gray-100 transition-colors"
                      >
                        <div className="font-semibold text-base mb-2">
                          {service.title}
                        </div>
                        <div className="text-xs text-gray-600 mb-4">
                          {service.description}
                        </div>
                      </Link>
                    </NavigationMenuLink>
                  ))}
                </div>
              </NavigationMenuContent>
            </NavigationMenuItem>
          </NavigationMenuList>
        </NavigationMenu>
        <NavigationMenu className="relative">
          <NavigationMenuList>
            <NavigationMenuItem>
              <NavigationMenuTrigger className="uppercase hover:text-[#004AAD] transition-colors duration-200 cursor-pointer font-semibold text-sm">
                Industries
              </NavigationMenuTrigger>
              <NavigationMenuContent>
                <ul className="grid w-[200px] gap-4">
                  <li>
                    <NavigationMenuLink asChild>
                      <Link href="/industries/retail">Retail & Ecommerce</Link>
                    </NavigationMenuLink>
                    <NavigationMenuLink asChild>
                      <Link href="/industries/logistics">
                        Logistics & Supply Chain
                      </Link>
                    </NavigationMenuLink>
                    <NavigationMenuLink asChild>
                      <Link href="/industries/finance">
                        Finance & Insurance
                      </Link>
                    </NavigationMenuLink>
                  </li>
                </ul>
              </NavigationMenuContent>
            </NavigationMenuItem>
          </NavigationMenuList>
        </NavigationMenu>
        <NavigationMenu className="relative">
          <NavigationMenuList>
            <NavigationMenuItem>
              <NavigationMenuTrigger className="uppercase hover:text-[#004AAD] transition-colors duration-200 cursor-pointer font-semibold text-sm">
                Insights
              </NavigationMenuTrigger>
              <NavigationMenuContent>
                <ul className="grid w-[200px] gap-4">
                  <li>
                    <NavigationMenuLink asChild>
                      <Link href="/insights/engineering-culture">
                        Engineering Culture
                      </Link>
                    </NavigationMenuLink>
                    <NavigationMenuLink asChild>
                      <Link href="/insights/guides">Guides</Link>
                    </NavigationMenuLink>
                    <NavigationMenuLink asChild>
                      <Link href="/insights/tech-trends">Tech Trends</Link>
                    </NavigationMenuLink>
                  </li>
                </ul>
              </NavigationMenuContent>
            </NavigationMenuItem>
          </NavigationMenuList>
        </NavigationMenu>
        <NavigationMenu className="relative">
          <NavigationMenuList>
            <NavigationMenuItem>
              <NavigationMenuTrigger className="uppercase hover:text-[#004AAD] transition-colors duration-200 cursor-pointer font-semibold text-sm">
                Why Us
              </NavigationMenuTrigger>
              <NavigationMenuContent>
                <ul className="grid w-[200px] gap-4">
                  <li>
                    <NavigationMenuLink asChild>
                      <Link href="/why-us/process">Our Process</Link>
                    </NavigationMenuLink>
                    <NavigationMenuLink asChild>
                      <Link href="/why-us/tech-stack">Tech Stack</Link>
                    </NavigationMenuLink>
                    <NavigationMenuLink asChild>
                      <Link href="/why-us/testimonials">Testimonials</Link>
                    </NavigationMenuLink>
                  </li>
                </ul>
              </NavigationMenuContent>
            </NavigationMenuItem>
          </NavigationMenuList>
        </NavigationMenu>
        <Link
          href="/contact"
          className="border rounded-xs border-[#020023] ml-5 py-2.5 px-5 cursor-pointer bg-[#020023] text-white active:scale-[0.98] hover:bg-white hover:text-[#020023] transition-all duration-300 uppercase"
        >
          CONTACT US
        </Link>
      </div>
    </nav>
  );
};

export default Navbar;
