"use client";

import Image from "next/image";
import { motion } from "framer-motion";

const destinations = [
  {
    title: "Great Barrier Reef",
    country: "Australia",
    duration: "9-day trip",
    description:
      "Dive into the vibrant underwater world of the Great Barrier Reef, a UNESCO World Heritage Site teeming with marine life.",
    price: "€2,500",
    img: "/images/gallery-1.jpg",
  },
  {
    title: "Grand Canyon",
    country: "United States",
    duration: "7-day trip",
    description:
      "Stand in awe at the colossal beauty of the Grand Canyon, carved by the forces of nature over millions of years.",
    price: "€1,200",
    img: "/images/gallery-2.jpg",
  },
  {
    title: "Machu Picchu",
    country: "Peru",
    duration: "10-day trip",
    description:
      "Uncover the mystique of the ancient Inca ruins perched high in the Andes Mountains at Machu Picchu.",
    price: "€2,200",
    img: "/images/gallery-3.jpg",
  },
  {
    title: "Bali",
    country: "Indonesia",
    duration: "11-day trip",
    description:
      "Find tranquility on the idyllic island of Bali, with its lush landscapes, serene temples, and warm hospitality.",
    price: "€3,200",
    img: "/images/gallery-4.jpg",
  },
  {
    title: "Rio de Janeiro",
    country: "Brazil",
    duration: "5-day trip",
    description:
      "Experience the rhythm and energy of Rio de Janeiro, home to vibrant Carnival celebrations, iconic landmarks, and stunning beaches.",
    price: "€1,600",
    img: "/images/gallery-5.jpg",
  },
  {
    title: "Niagara Falls",
    country: "Canada",
    duration: "13-day trip",
    description:
      "Immerse yourself in the breathtaking cascades and embark on unforgettable adventures in this natural wonder.",
    price: "€3,000",
    img: "/images/gallery-6.jpg",
  },
];

export default function Gallery() {
  return (
    <section className="bg-[#f1efec] px-10 py-20 text-[#151618] font-sans">
      <header className="max-w-4xl mb-20">
        <p className="text-sm uppercase font-bold text-[#e54949] mb-2">
          Take a trip
        </p>
        <h2 className="text-5xl font-playfair font-bold leading-[1.2] mb-4">
          Destinations Unveiled: Inspiring Journeys Await
        </h2>
        <p className="text-lg">
          Embark on a virtual adventure to stunning destinations worldwide,
          where breathtaking landscapes, vibrant cultures, and unforgettable
          experiences await.
        </p>
      </header>

      <ul className="grid gap-8 md:grid-cols-2 xl:grid-cols-3 list-none p-0 m-0">
        {destinations.map((place, idx) => (
          <li key={idx} className="aspect-[3/4] overflow-hidden relative group">
            <figure className="w-full h-full relative">
              <a href="#" className="block w-full h-full">
                <motion.div
                  initial={{ scale: 1.2 }}
                  whileHover={{ scale: 1 }}
                  transition={{ duration: 0.3 }}
                  className="w-full h-full"
                >
                  <Image
                    src={place.img}
                    alt={place.title}
                    fill
                    className="object-cover"
                  />
                </motion.div>
              </a>

              <figcaption className="absolute inset-0 flex flex-col justify-end gap-6 p-10 text-white z-10 pointer-events-none">
                <motion.main
                  initial={{ opacity: 0, y: 24 }}
                  whileHover={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.3 }}
                  className="flex flex-col gap-4"
                >
                  <p className="uppercase text-sm font-bold">{place.duration}</p>
                  <h3 className="text-3xl font-playfair font-normal">
                    {place.title}, <em className="not-italic font-semibold">{place.country}</em>
                  </h3>
                  <p className="text-sm leading-relaxed">{place.description}</p>
                </motion.main>

                <motion.footer
                  initial={{ opacity: 0, y: 24 }}
                  whileHover={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.3 }}
                  className="flex justify-between items-center"
                >
                  <div>
                    <p className="text-sm">From</p>
                    <p className="text-xl font-playfair">{place.price}</p>
                  </div>
                  <motion.img
                    initial={{ x: -48, opacity: 0, rotate: 360 }}
                    whileHover={{ x: 0, opacity: 1, rotate: 0 }}
                    transition={{ duration: 0.3, delay: 0.3 }}
                    src="/icons/icon-arrow-right-color.svg"
                    alt="Icon"
                    className="w-6 h-6"
                  />
                </motion.footer>
              </figcaption>

              <motion.div
                initial={{ opacity: 0 }}
                whileHover={{ opacity: 1 }}
                transition={{ duration: 0.3 }}
                className="absolute inset-0 bg-gradient-to-b from-[#1516183d] to-[#151618] z-0"
              />
            </figure>
          </li>
        ))}
      </ul>
    </section>
  );
}
