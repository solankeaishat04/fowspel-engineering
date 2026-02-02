"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";

const images = [
  "/fowspel.avif",
  "/fowspel2.jpg",
  "/fowspel5.jpg",
  "/fowspel gym4.webp",
];

export default function Hero() {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const id = setInterval(
      () => setIndex((i) => (i + 1) % images.length),
      5000
    );
    return () => clearInterval(id);
  }, []);

  return (
    <section className="relative h-screen text-white">
      <Image
        src={images[index]}
        alt="Engineering"
        fill
        className="object-cover opacity-80"
        priority
      />

      <div className="absolute inset-0 bg-black/70" />

      <div className="relative z-10 max-w-7xl mx-auto px-6 h-full flex items-center">
        <div className="max-w-xl space-y-6">
          <h1 className="text-5xl font-bold">
            Fowspel <span className="text-orange-500">Engineering</span>
          </h1>

          <p>
            Reliable construction, fabrication and engineering solutions.
          </p>

          <div className="flex gap-4">
            <Link href="/services" className="btn-primary">
              Our Services
            </Link>
            <Link href="/contact" className="btn-outline">
              Contact Us
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
