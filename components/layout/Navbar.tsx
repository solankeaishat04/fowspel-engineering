"use client";

import Link from "next/link";
import Image from "next/image";
import { useState } from "react";

const NavData = [
  { name: "About Us", link: "/about" },
  { name: "Services", link: "/services" },
  { name: "Contact", link: "/contact" },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 bg-white border-b">
      <div className="max-w-7xl mx-auto px-6 flex items-center justify-between py-4">
        <Link href="/">
          <Image
            src="/fowspel_logo-removebg-preview.png"
            alt="Fowspel Engineering"
            width={120}
            height={40}
          />
        </Link>

        <nav className="hidden md:flex gap-10 font-semibold">
          {NavData.map((item) => (
            <Link key={item.name} href={item.link}>
              {item.name}
            </Link>
          ))}
        </nav>

        <button onClick={() => setOpen(!open)} className="md:hidden">
          ☰
        </button>
      </div>

      {open && (
        <div className="md:hidden bg-white px-6 pb-4">
          {NavData.map((item) => (
            <Link
              key={item.name}
              href={item.link}
              onClick={() => setOpen(false)}
              className="block py-2"
            >
              {item.name}
            </Link>
          ))}
        </div>
      )}
    </header>
  );
}
