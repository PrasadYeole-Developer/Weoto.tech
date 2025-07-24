"use client";
import React from "react";
import Image from "next/image";
import Link from "next/link";

const Footer = () => {
  return (
    <footer className="w-full text-white font-sans bg-[#020023] select-none">
      <div className="max-w-7xl mx-auto px-4 md:px-10 py-12 md:pt-16 md:pb-10">
        <div className="grid gap-10 md:grid-cols-4">
          <div>
            <h2
              className="text-2xl font-bold tracking-widest mb-3 uppercase border-b border-white pb-2 w-fit cursor-pointer"
              onClick={() => (window.location.href = "/")}
            >
              WEOTO
            </h2>
            <p className="text-gray-200 text-sm leading-relaxed mb-4">
              Weoto is a company formed by four enthusiasts to serve businesses
              with their technical expertise. We aim to help companies gain
              competitiveness and agility through software solutions.
            </p>
            <div className="flex gap-5 items-center mt-3">
              <a
                href="https://www.instagram.com/weoto/"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Instagram"
              >
                <Image
                  src="/instagram.svg"
                  alt="Instagram"
                  width={26}
                  height={26}
                />
              </a>
              <a
                href="https://www.linkedin.com/company/weoto-technologies-private-limited/"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn"
              >
                <Image
                  src="/linkedin.svg"
                  alt="LinkedIn"
                  width={36}
                  height={36}
                />
              </a>
              <a
                href="https://x.com/WeotoTechlabs/"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Twitter"
              >
                <Image
                  src="/twitter.svg"
                  alt="Twitter"
                  width={23}
                  height={23}
                />
              </a>
            </div>
          </div>

          <div>
            <h3 className="text-base font-bold mb-4 tracking-wider uppercase">
              Quick Links
            </h3>
            <ul className="space-y-2 text-sm">
              {[
                { label: "Home", href: "/" },
                { label: "About", href: "/about" },
                { label: "Services", href: "/services" },
                { label: "Industries", href: "/industries" },
                { label: "Insights", href: "/insights" },
                { label: "Why Weoto", href: "/why-us" },
                { label: "Contact Us", href: "/contact" },
              ].map(({ label, href }) => (
                <li key={label}>
                  <a
                    href={href}
                    className="text-gray-200 hover:text-white transition-colors duration-200"
                  >
                    {label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-base font-bold mb-4 tracking-wider uppercase">
              Services
            </h3>
            <ul className="space-y-2 text-sm">
              {[
                {
                  label: "B2B eCommerce Applications",
                  href: "/services/b2b-ecommerce",
                },
                {
                  label: "Custom Software Development",
                  href: "/services/custom-software",
                },
                {
                  label: "Mobile App Development",
                  href: "/services/mobile-app",
                },
                {
                  label: "SaaS & ERP Platforms",
                  href: "/services/saas-erp",
                },
                {
                  label: "Cloud & DevOps Services",
                  href: "/services/cloud-devops",
                },
                {
                  label: "Supply Chain Management Solutions",
                  href: "/services/supply-chain",
                },
              ].map(({ label, href }) => (
                <li key={label}>
                  <a
                    href={href}
                    className="text-gray-200 hover:text-white transition-colors duration-200"
                  >
                    {label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-base font-bold mb-4 tracking-wider uppercase">
              Contact Us
            </h3>
            <div className="text-sm text-gray-200 space-y-1">
              <p className="font-bold text-white">
                <Link
                  href="https://maps.app.goo.gl/6AvyS67MHfC3egks8"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-white transition-colors duration-200"
                >
                  Weoto Technologies Private Limited
                </Link>
              </p>
              <p>First floor, Padmanabh, Godawari Nagar</p>
              <p>Pujya Sri Sri Ravishankar Marg, Kalpataru Nagar</p>
              <p>Nashik, Maharashtra 422001</p>
              <div className="mt-2 space-y-1">
                <p>
                  <strong>Phone:</strong>{" "}
                  <a
                    href="tel:+918625888782"
                    className="hover:text-white transition-colors duration-200"
                  >
                    +91-8625888782
                  </a>
                </p>
                <p>
                  <strong>Email:</strong>{" "}
                  <a
                    href="mailto:contact@weoto.tech"
                    className="hover:text-white transition-colors duration-200"
                  >
                    contact@weoto.tech
                  </a>
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-white mt-10 pt-6 text-center">
          <Link
            href="https://maps.app.goo.gl/6AvyS67MHfC3egks8"
            target="_blank"
            rel="noopener noreferrer"
            className="text-sm text-white"
          >
            © {new Date().getFullYear()}{" "}
            <strong>Weoto Technologies Pvt. Ltd.</strong> All rights reserved.
          </Link>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
