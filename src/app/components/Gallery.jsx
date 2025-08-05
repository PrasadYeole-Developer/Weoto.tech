"use client";

import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { useState, useCallback } from "react";

const destinations = [
  {
    title: "Great Barrier Reef",
    country: "Australia",
    duration: "9-day trip",
    description:
      "Dive into the vibrant underwater world of the Great Barrier Reef, a UNESCO World Heritage Site teeming with marine life.",
    price: "€2,500",
    img: "https://images.pexels.com/photos/189349/pexels-photo-189349.jpeg?auto=compress&w=800&q=80",
  },
  {
    title: "Grand Canyon",
    country: "United States",
    duration: "7-day trip",
    description:
      "Stand in awe at the colossal beauty of the Grand Canyon, carved by the forces of nature over millions of years.",
    price: "€1,200",
    img: "https://images.pexels.com/photos/356844/pexels-photo-356844.jpeg?auto=compress&w=800&q=80",
  },
  {
    title: "Machu Picchu",
    country: "Peru",
    duration: "10-day trip",
    description:
      "Uncover the mystique of the ancient Inca ruins perched high in the Andes Mountains at Machu Picchu.",
    price: "€2,200",
    img: "https://images.pexels.com/photos/674010/pexels-photo-674010.jpeg?auto=compress&w=800&q=80",
  },
  {
    title: "Bali",
    country: "Indonesia",
    duration: "11-day trip",
    description:
      "Find tranquility on the idyllic island of Bali, with its lush landscapes, serene temples, and warm hospitality.",
    price: "€3,200",
    img: "https://images.pexels.com/photos/753626/pexels-photo-753626.jpeg?auto=compress&w=800&q=80",
  },
  {
    title: "Rio de Janeiro",
    country: "Brazil",
    duration: "5-day trip",
    description:
      "Experience the rhythm and energy of Rio de Janeiro, home to vibrant Carnival celebrations, iconic landmarks, and stunning beaches.",
    price: "€1,600",
    img: "https://images.pexels.com/photos/1619561/pexels-photo-1619561.jpeg?auto=compress&w=800&q=80",
  },
  {
    title: "Niagara Falls",
    country: "Canada",
    duration: "13-day trip",
    description:
      "Immerse yourself in the breathtaking cascades and embark on unforgettable adventures in this natural wonder.",
    price: "€3,000",
    img: "https://images.pexels.com/photos/145939/pexels-photo-145939.jpeg?auto=compress&w=800&q=80",
  },
];

function DestinationCard({ place, idx, hoveredIndex, setHoveredIndex }) {
  const handleFocus = useCallback(
    () => setHoveredIndex(idx),
    [idx, setHoveredIndex]
  );
  const handleBlur = useCallback(
    () => setHoveredIndex(null),
    [setHoveredIndex]
  );

  const cardVariants = {
    initial: { scale: 1, boxShadow: "0 2px 8px rgba(0,0,0,0.04)" },
    hover: { scale: 1.03, boxShadow: "0 8px 32px rgba(0,0,0,0.12)" },
  };

  const contentVariants = {
    initial: { opacity: 0, y: 24 },
    hover: { opacity: 1, y: 0 },
  };

  const iconVariants = {
    initial: { x: -72, opacity: 0, rotate: 360 },
    hover: { x: 0, opacity: 1, rotate: 0 },
  };

  const overlayVariants = {
    initial: { opacity: 0 },
    hover: { opacity: 1 },
  };

  return (
    <motion.li
      key={idx}
      variants={cardVariants}
      initial="initial"
      whileHover="hover"
      animate={hoveredIndex === idx ? "hover" : "initial"}
      onHoverStart={() => setHoveredIndex(idx)}
      onHoverEnd={() => setHoveredIndex(null)}
      tabIndex={0}
      onFocus={handleFocus}
      onBlur={handleBlur}
      aria-label={`${place.title}, ${place.country}, ${place.duration}, from ${place.price}`}
      className="aspect-[3/4] max-w-[220px] md:max-w-[260px] overflow-hidden relative group rounded shadow-md focus:outline-none focus:ring-2 focus:ring-[#e54949] transition-shadow"
    >
      <figure className="relative w-full h-full overflow-hidden">
        <div className="relative w-full h-full">
          <motion.div
            initial={{ scale: 1.2 }}
            animate={hoveredIndex === idx ? { scale: 1 } : { scale: 1.2 }}
            transition={{ duration: 0.3 }}
            className="relative w-full h-full"
          >
            <Image
              src={place.img}
              alt={place.title}
              fill
              className="object-cover"
              sizes="(max-width: 768px) 100vw, 33vw"
              draggable={false}
              priority={idx < 2}
            />
          </motion.div>

          <motion.div
            variants={overlayVariants}
            animate={hoveredIndex === idx ? "hover" : "initial"}
            className="absolute inset-0 bg-gradient-to-b from-[#1516183d]/30 to-[#151618] z-0 pointer-events-none"
            transition={{ duration: 0.3 }}
          />
        </div>

        <figcaption className="absolute inset-0 z-10 pointer-events-none flex flex-col justify-end gap-3 p-4 md:p-5 text-white bg-gradient-to-t from-black/40 via-black/10 to-transparent">
          <motion.main
            variants={contentVariants}
            animate={hoveredIndex === idx ? "hover" : "initial"}
            transition={{ duration: 0.3 }}
            className="flex flex-col gap-2"
          >
            <p className="uppercase text-[0.65rem] md:text-xs font-semibold tracking-wider text-[#e54949]">
              {place.duration}
            </p>
            <h3 className="text-lg md:text-xl font-playfair font-medium leading-snug tracking-tight">
              {place.title},{" "}
              <em className="not-italic font-bold text-[#e54949]">
                {place.country}
              </em>
            </h3>
            <p className="text-xs md:text-xs leading-relaxed text-[#f3f3f3] tracking-normal font-light">
              {place.description}
            </p>
          </motion.main>

          <motion.footer
            variants={contentVariants}
            animate={hoveredIndex === idx ? "hover" : "initial"}
            transition={{ duration: 0.3 }}
            className="flex justify-between items-center"
          >
            <div>
              <p className="text-[0.6rem] md:text-xs uppercase tracking-wide text-[#ddd] font-medium">
                From
              </p>
              <p className="text-base md:text-lg font-playfair font-semibold text-white">
                {place.price}
              </p>
            </div>
            <motion.span
              variants={iconVariants}
              animate={hoveredIndex === idx ? "hover" : "initial"}
              transition={{ duration: 0.3, delay: 0.2 }}
              aria-hidden="true"
              className="w-7 h-7 md:w-8 md:h-8 flex items-center justify-center"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="28"
                height="28"
                fill="none"
                viewBox="0 0 24 24"
                className="w-7 h-7 md:w-8 md:h-8"
              >
                <path
                  d="M5 12h14M13 6l6 6-6 6"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </motion.span>
          </motion.footer>
        </figcaption>
      </figure>
    </motion.li>
  );
}

export default function Gallery() {
  const [hoveredIndex, setHoveredIndex] = useState(null);

  return (
    <section
      className="bg-[#f1efec] px-2 md:px-4 py-8 md:py-12 text-[#151618] font-sans antialiased"
      aria-labelledby="gallery"
    >
      <ul className="grid gap-4 md:gap-6 grid-cols-2 md:grid-cols-3 lg:grid-cols-6 list-none p-0 m-0 justify-center">
        {destinations.map((place, idx) => (
          <DestinationCard
            key={idx}
            place={place}
            idx={idx}a
            hoveredIndex={hoveredIndex}
            setHoveredIndex={setHoveredIndex}
          />
        ))}
      </ul>
    </section>
  );
}
