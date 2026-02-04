"use client";

import { HardHat, Zap, Smile, MapPin, ArrowRight } from "lucide-react";
import { JSX, useEffect, useRef, useState } from "react";
import CountUp from "react-countup";
import AOS from "aos"; 
import "aos/dist/aos.css";
import Link from "next/link";

interface StatItem {
  label: string;
  end: number;
  icon: JSX.Element;
}

const stats: StatItem[] = [
  { label: "Projects Completed", end: 250, icon: <HardHat size={35} /> },
  { label: "Engineering Installations", end: 480, icon: <Zap size={35} /> },
  { label: "Satisfied Clients", end: 320, icon: <Smile size={35} /> },
  { label: "Project Locations", end: 18, icon: <MapPin size={35} /> },
];

const Stats = () => {
  const [active, setActive] = useState<number[]>([]);
  const refs = useRef<(HTMLDivElement | null)[]>([]);

  useEffect(() => {
    AOS.init({ duration: 1000 });

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          const index = Number(entry.target.getAttribute("data-index"));
          if (entry.isIntersecting) {
            setActive((prev) =>
              prev.includes(index) ? prev : [...prev, index]
            );
          }
        });
      },
      { threshold: 0.5 }
    );

    refs.current.forEach((ref) => ref && observer.observe(ref));

    return () => observer.disconnect();
  }, []);

  return (
    <section className="bg-linear-to-r  from-gray-900 to-orange-900 text-white py-20 px-4 max-w-7xl mx-auto">
      <div className="max-w-7xl mx-auto">
        
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Engineering Excellence{" "}
            <span className="text-orange-400">That Delivers</span>
          </h2>

          <p className="text-xl max-w-3xl mx-auto">
            We deliver reliable construction, electrical, and engineering
            solutions with precision, safety, and long-term value.
          </p>

         <Link
  href="/about"
  className="mt-8 inline-flex items-center gap-2 bg-orange-500 hover:bg-orange-600 px-8 py-4 rounded-full text-sm font-semibold transition hover:scale-105"
>
  View Our Projects <ArrowRight size={16} />
</Link>

        </div>

     
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {stats.map((stat, index) => (
            <div
              key={index}
              ref={(el) => {
                refs.current[index] = el;
              }}
              data-index={index}
              className="flex flex-col items-center justify-center py-12 bg-linear-to-r from-orange-700 to-orange-400 rounded-xl"
              data-aos="zoom-in"
            >
              {stat.icon}

              <div className="text-4xl font-bold mt-4">
                {active.includes(index) ? (
                  <CountUp end={stat.end} duration={2} separator="," />
                ) : (
                  0
                )}
                +
              </div>

              <p className="mt-2 text-center text-lg">
                {stat.label}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Stats;
