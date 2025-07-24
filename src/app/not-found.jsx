"use client";
import { useRouter } from "next/navigation";
import { motion } from "framer-motion";

export default function NotFoundPage() {
  const router = useRouter();

  const container = {
    hidden: {},
    show: {
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const fadeInUp = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0, transition: { duration: 0.5 } },
  };

  return (
    <motion.div
      variants={container}
      initial="hidden"
      animate="show"
      className="flex flex-col items-center justify-center h-screen bg-[#020023] text-white text-center px-4"
    >
      <motion.h1 variants={fadeInUp} className="text-6xl md:text-8xl font-bold">
        404
      </motion.h1>

      <motion.p variants={fadeInUp} className="mt-4 text-xl md:text-2xl">
        Oops! Page not found.
      </motion.p>

      <motion.p variants={fadeInUp} className="text-white/70 mt-2 max-w-xl">
        The page you're looking for doesn't exist or has been moved.
      </motion.p>

      <motion.div variants={fadeInUp} className="mt-6">
        <button
          onClick={() => router.push("/")}
          className="bg-white text-black px-6 py-2 rounded-full font-medium cursor-pointer hover:bg-gray-200 transition-colors duration-300"
        >
          Go Home
        </button>
      </motion.div>
    </motion.div>
  );
}
