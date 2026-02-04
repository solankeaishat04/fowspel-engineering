"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const images = [
  "/fowspel.avif",
  "/fowspel2.jpg",
  "/fowspelgym1.jpg",
  "/fowspelgym4.webp",
];

export default function Hero() {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const id = setInterval(() => {
      setIndex((i) => (i + 1) % images.length);
    }, 5000);
    return () => clearInterval(id);
  }, []);

  return (
    <section className="relative h-screen overflow-hidden">
      {/* Animated Background */}
      <AnimatePresence mode="wait">
        <motion.div
          key={images[index]}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 1 }}
          className="absolute inset-0"
        >
          <Image
            src={images[index]}
            alt="Fowspel Engineering"
            fill
            priority
            className="object-cover"
          />
        </motion.div>
      </AnimatePresence>

      {/* Overlay */}
      <div className="absolute inset-0 bg-black/80" />

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-6 h-full flex items-center">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: "easeOut" }}
          className="max-w-2xl space-y-6"
        >
          <h2 className="text-4xl md:text-5xl font-bold leading-tight text-white">
            Fowspel Engineering Ltd
            <span className="block text-orange-500"><br />
            Building strength through <br />
            wellness.</span>
          </h2>

          <p className="text-gray-200 text-sm md:text-base">
             We deliver reliable construction, fabrication, and engineering
            services designed to stand the test of time.
          </p>

          <motion.div
            className="flex flex-wrap gap-4 pt-4"
            initial="hidden"
            animate="visible"
            variants={{
              hidden: { opacity: 0 },
              visible: {
                opacity: 1,
                transition: { staggerChildren: 0.2 },
              },
            }}
          >
            <motion.div
              variants={{
                hidden: { opacity: 0, y: 20 },
                visible: { opacity: 1, y: 0 },
              }}
            >
              <Link
                href="/services"
                className="px-8 py-3 rounded-lg bg-orange-600 hover:bg-orange-700 text-black font-semibold transition"
              >
                Our Services
              </Link>
            </motion.div>

            <motion.div
              variants={{
                hidden: { opacity: 0, y: 20 },
                visible: { opacity: 1, y: 0 },
              }}
            >
              <Link
                href="/contact"
                className="px-8 py-3 rounded-lg border border-orange-500 text-orange-500 hover:bg-orange-500 hover:text-black font-semibold transition"
              >
                Get in Touch
              </Link>
            </motion.div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
