import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/all";
import React from "react";

const Edges = () => {
  gsap.registerPlugin(ScrollTrigger);

  useGSAP(() => {
    const Edges = gsap.timeline();
    gsap.utils.toArray(".edge-left").forEach((el, index) => {
      Edges.from(el, {
        scrollTrigger: {
          trigger: el,
          start: "top 90%",
          end: "bottom 70%",
          scrub: true,
          toggleActions: "play none none reverse",
        },
        xPercent: -100,
        opacity: 0,
        scale: 0.9,
        duration: 1.2,
        ease: "power3.out",
      });
    });

    gsap.utils.toArray(".edge-right").forEach((el, index) => {
      Edges.from(el, {
        scrollTrigger: {
          trigger: el,
          start: "top 90%",
          end: "bottom 70%",
          scrub: true,
          toggleActions: "play none none reverse",
        },
        xPercent: 100,
        opacity: 0,
        scale: 0.9,
        duration: 1.2,
        ease: "power3.out",
      });
    });
  }, []);

  const cardData = [
    {
      image:
        "https://images.pexels.com/photos/3184465/pexels-photo-3184465.jpeg?auto=compress&cs=tinysrgb&w=800",
      title: "We build a tech delivery roadmap to align with your goals",
      description:
        "We co-create apps by understanding your business needs first. We identify processes that can be streamlined and build a tech delivery roadmap to align with your goals.",
    },
    {
      image:
        "https://images.pexels.com/photos/3184339/pexels-photo-3184339.jpeg?auto=compress&cs=tinysrgb&w=800",
      title: "Seamless collaboration from idea to execution",
      description:
        "We believe in transparent communication and real-time collaboration with clients to ensure the vision is translated into impactful digital products.",
    },
    {
      image:
        "https://images.pexels.com/photos/3184360/pexels-photo-3184360.jpeg?auto=compress&cs=tinysrgb&w=800",
      title: "Future-ready solutions that scale with you",
      description:
        "From MVP to enterprise-grade apps, our tech stack and architecture ensure you're ready to grow, adapt, and lead your industry forward.",
    },
  ];

  return (
    <div className="min-h-screen bg-white py-12 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="space-y-16">
          {cardData.map((card, index) => (
            <div key={index} className="relative">
              <div
                className={
                  "flex flex-col lg:flex-row items-center gap-12 lg:gap-20 pt-8"
                }
              >
                <div className="w-full lg:w-1/2 flex justify-center">
                  <div className="edge-left relative">
                    <img
                      src={card.image}
                      alt={card.title}
                      className="w-full h-64 md:h-80 object-cover rounded-2xl"
                    />
                  </div>
                </div>

                <div className="edge-right w-full lg:w-1/2 text-center lg:text-left">
                  <div className="space-y-6">
                    <h2 className="text-3xl md:text-4xl xl:text-5xl font-semibold text-gray-900 leading-tight">
                      {card.title}
                    </h2>

                    <p className="text-lg md:text-xl text-gray-600 leading-relaxed">
                      {card.description}
                    </p>

                    <div className="flex flex-wrap gap-3 justify-center lg:justify-start">
                      {["Strategy", "Design", "Development", "Launch"].map(
                        (tag, tagIndex) => (
                          <span
                            key={tagIndex}
                            className="px-4 py-2 bg-gray-100 text-gray-700 rounded-full text-sm font-medium hover:bg-gray-200 transition-colors duration-200"
                          >
                            {tag}
                          </span>
                        )
                      )}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Edges;
