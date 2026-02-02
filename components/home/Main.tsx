"use client";

import { useEffect, useState } from "react";
import { ChevronDown } from "lucide-react";
import AOS from "aos";
import "aos/dist/aos.css";

interface Feature {
  id: number;
  number: string;
  title: string;
  description: string;
  extendedContent: string[];
}

const features: Feature[] = [
  {
    id: 1,
    number: "01",
    title: "Quality Engineering",
    description:
      "We deliver durable engineering solutions that meet global standards.",
    extendedContent: [
      "Strict quality control processes",
      "Use of certified materials",
      "Compliance with safety regulations",
      "Long-term project durability",
    ],
  },
  {
    id: 2,
    number: "02",
    title: "Experienced Team",
    description:
      "Our engineers and technicians bring years of hands-on industry experience.",
    extendedContent: [
      "Certified engineers and technicians",
      "Proven project execution",
      "Strong technical leadership",
      "Continuous professional training",
    ],
  },
  {
    id: 3,
    number: "03",
    title: "Timely Delivery",
    description:
      "We plan, execute, and deliver projects within agreed timelines.",
    extendedContent: [
      "Efficient project management",
      "Clear milestones and tracking",
      "Fast response to challenges",
      "Client-focused communication",
    ],
  },
];

const Main = () => {
  const [expanded, setExpanded] = useState<number[]>([]);

  useEffect(() => {
    AOS.init({
      duration: 800,
      easing: "ease-in-out",
      once: false,
    });
  }, []);

  const toggleFeature = (index: number) => {
    setExpanded((prev) =>
      prev.includes(index)
        ? prev.filter((i) => i !== index)
        : [...prev, index]
    );
  };

  return (
    <section className="min-h-screen bg-gray-50 max-w-7xl mx-auto">
      {/* INTRO */}
      <div className="bg-white py-12 px-6 text-center" data-aos="fade-up">
        <h2 className="text-2xl md:text-3xl mb-4 font-bold">
          WHY CHOOSE FOWSPEL ENGINEERING LTD
        </h2>
        <p className="text-gray-600 max-w-2xl mx-auto">
          We deliver safe, durable, and innovative engineering solutions
          tailored to industry standards and client expectations.
        </p>
      </div>

      {/* FEATURES */}
      <div className="max-w-6xl mx-auto px-6 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {features.map((feature, index) => (
            <div
              key={feature.id}
              className="bg-gray-200 rounded-lg shadow-sm p-7"
              data-aos="fade-up"
              data-aos-delay={(index + 1) * 100}
            >
              <div className="mb-4 w-10 py-2 bg-linear-to-r  from-orange-700 to-orange-400 rounded-xl text-white font-bold text-center">
                {feature.number}
              </div>

              <h3 className="text-xl font-semibold mb-3">
                {feature.title}
              </h3>

              <p className="text-gray-600 mb-4">
                {feature.description}
              </p>

              {/* EXPANDABLE */}
              <div
                className="overflow-hidden transition-all duration-300"
                style={{
                  maxHeight: expanded.includes(index) ? "500px" : "0px",
                  opacity: expanded.includes(index) ? 1 : 0,
                }}
              >
                <ul className="list-disc pl-5 mb-4 text-gray-600 space-y-2">
                  {feature.extendedContent.map((item, i) => (
                    <li key={i}>{item}</li>
                  ))}
                </ul>
              </div>

              <button
                onClick={() => toggleFeature(index)}
                className="text-orange-600 flex items-center gap-1 hover:text-orange-800 transition"
              >
                Learn More
                <ChevronDown
                  size={16}
                  className={`transition-transform ${
                    expanded.includes(index) ? "rotate-180" : ""
                  }`}
                />
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Main;
