"use client";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import Link from "next/link";
import React, { useRef } from "react";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu";

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
  return (
    <nav className="w-full px-[7rem] py-[0.7rem] flex items-center justify-between fixed text-[#020023] bg-white overflow z-[100]">
      <div className="left">
        <h2
          ref={h2}
          onClick={() => (window.location.href = "/")}
          className="scroll-m-20 border-b border-[#020023] pb-2 text-3xl font-semibold tracking-tight cursor-pointer"
        >
          WEOTO{" "}
        </h2>
      </div>
      <div
        ref={links}
        className="right flex gap-[0.5rem] text-sm font-semibold font-sans items-center"
      >
        <NavigationMenu className="relative list-none">
          <NavigationMenuItem>
            <NavigationMenuLink
              asChild
              className={navigationMenuTriggerStyle()}
            >
              <Link
                href="/"
                className="uppercase hover:text-[#004AAD] transition-colors duration-200 font-semibold text-sm decoration-none"
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
                      <Link href="/why-us/security">Security</Link>
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
          className="border border-[#020023] ml-5 py-2.5 px-5 cursor-pointer hover:bg-[#020023] hover:text-white transition-colors duration-300"
        >
          CONTACT US
        </Link>
      </div>
    </nav>
  );
};

export default Navbar;
