import React from "react";

const Footer = () => {
  return (
    <footer className="bg-[#222222] text-white py-12 px-4 md:px-8 w-full text-serif">
      <div className="max-w-7xl mx-auto">
        <div className="mb-12 text-center">
          <h2 className="text-2xl md:text-3xl font-bold mb-4 text-white">
            Weoto
          </h2>
          <p className="text-gray-300 text-base md:text-lg leading-relaxed max-w-4xl mx-auto">
            Weoto is company formed by four enthusiasts to serve businesses with
            their technical expertise. At Weoto, we are on a mission to help
            companies develop competitiveness and agility using the software.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-4 gap-10 md:gap-16">
          <div>
            <h3 className="text-lg md:text-xl font-semibold mb-4 md:mb-6 tracking-wide">
              Quick Links
            </h3>
            <ul className="space-y-2 md:space-y-4">
              <li>
                <a
                  href="#"
                  className="text-gray-300 hover:text-white transition-colors duration-200"
                >
                  Home
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-gray-300 hover:text-white transition-colors duration-200"
                >
                  Our Work
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-gray-300 hover:text-white transition-colors duration-200"
                >
                  Technologies
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-gray-300 hover:text-white transition-colors duration-200"
                >
                  About Us
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-gray-300 hover:text-white transition-colors duration-200"
                >
                  Contact Us
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg md:text-xl font-semibold mb-4 md:mb-6 tracking-wide">
              Services
            </h3>
            <ul className="space-y-2 md:space-y-4">
              <li>
                <a
                  href="#"
                  className="text-gray-300 hover:text-white transition-colors duration-200"
                >
                  Web Development
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-gray-300 hover:text-white transition-colors duration-200"
                >
                  Mobile Development
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-gray-300 hover:text-white transition-colors duration-200"
                >
                  E-Commerce
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-gray-300 hover:text-white transition-colors duration-200"
                >
                  DevOps
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-gray-300 hover:text-white transition-colors duration-200"
                >
                  Blockchain
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-gray-300 hover:text-white transition-colors duration-200"
                >
                  Artificial Intelligence and Machine Learning
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg md:text-xl font-semibold mb-4 md:mb-6 tracking-wide">
              Contact Us
            </h3>
            <div className="text-gray-300 text-sm leading-relaxed space-y-2">
              <p className="font-semibold text-white">
                Weoto Technologies Private Limited
              </p>
              <p>First floor, Padmanabh, Godawari Nagar,</p>
              <p>Pujya Sri Sri Ravishankar Marg, Kalpataru Nagar,</p>
              <p>Nashik, Maharashtra 422001</p>

              <div className="pt-4 space-y-2">
                <p>
                  <span className="font-semibold">Phone:</span>{" "}
                  <a
                    href="tel:+918625888782"
                    className="hover:text-white transition-colors duration-200"
                  >
                    +91-8625888782
                  </a>
                </p>
                <p>
                  <span className="font-semibold">Email:</span>{" "}
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

          <div className="socials flex flex-col gap-[1.5rem] items-center pt-10">
              <a
                href="https://www.instagram.com/weoto/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <img
                  src="/instagram.svg"
                  alt="Instagram"
                  className="w-[3.6rem] h-[3.6rem]"
                />
              </a>
              <a
                href="https://www.linkedin.com/company/weoto-technologies-private-limited/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <img
                  src="/linkedin.svg"
                  alt="LinkedIn"
                  className="w-[4.4rem] h-[4.4rem]"
                />
              </a>
              <a
                href="https://x.com/WeotoTechlabs/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <img
                  src="/twitter.svg"
                  alt="Twitter"
                  className="w-[3.2rem] h-[3.2rem]"
                ></img>
              </a>
            </div>
        </div>

        <div className="border-t border-white mt-10 pt-6 text-center">
          <span className="text-white text-xs md:text-sm mb-2 md:mb-0">
            © Copyright <strong>Weoto Technologies Pvt Ltd.</strong> All Rights
            Reserved
          </span>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
