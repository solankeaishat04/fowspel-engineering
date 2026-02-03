"use client";

import { Box, Typography, Button, Card, CardContent } from "@mui/material";
import { motion } from "framer-motion";

const MotionBox = motion(Box);

const services = [
  {
    title: "Custom Gym Design",
    description: "Tailored gym layouts optimizing space, equipment, and workflow.",
    icon: "🏋️‍♂️",
  },
  {
    title: "Smart Equipment Integration",
    description: "IoT-enabled machines for data-driven training and management.",
    icon: "🤖",
  },
  {
    title: "Maintenance & Support",
    description: "Full maintenance services to keep your gym running smoothly.",
    icon: "🛠️",
  },
  {
    title: "Performance Analytics",
    description: "Real-time performance insights for clients and staff.",
    icon: "📊",
  },
];

export default function ServicesPage() {
  return (
    <Box className="bg-black text-white min-h-screen">
      {/* HERO – Similar to Home */}
      <Box className="py-20 px-4 md:px-8 text-center max-w-5xl mx-auto">
        <MotionBox
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <Typography className="text-4xl md:text-6xl font-bold text-orange-500 mb-6">
            Our Services
          </Typography>

          <Typography className="text-gray-300 text-lg md:text-xl mb-8">
            We design, build, and support modern gym environments that combine
            performance, technology, and efficiency.
          </Typography>

          <Button className="bg-orange-500 hover:bg-orange-600 text-black font-bold px-8 py-3 rounded-lg">
            Get a Consultation
          </Button>
        </MotionBox>
      </Box>

      {/* SERVICES GRID */}
      <Box className="py-16 px-4 md:px-8 max-w-7xl mx-auto">
        <Typography className="text-3xl md:text-4xl font-bold text-center text-orange-500 mb-12">
          What We Offer
        </Typography>

        <Box className="flex flex-wrap gap-6 justify-center">
          {services.map((service, index) => (
            <MotionBox
              key={index}
              initial={{ opacity: 0, x: 100 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.15 }}
              className="w-full sm:w-[48%] lg:w-[23%]"
            >
              <Card className="bg-gray-900 border border-gray-800 rounded-2xl h-full hover:-translate-y-2 transition-transform duration-300">
                <CardContent className="text-center p-6">
                  <Typography className="text-4xl mb-4">
                    {service.icon}
                  </Typography>

                  <Typography className="text-xl font-bold text-orange-500 mb-2">
                    {service.title}
                  </Typography>

                  <Typography className="text-gray-300 text-sm">
                    {service.description}
                  </Typography>
                </CardContent>
              </Card>
            </MotionBox>
          ))}
        </Box>
      </Box>

      {/* STATS SECTION */}
      <Box className="bg-gray-900 py-16 px-4 md:px-8">
        <Box className="max-w-5xl mx-auto flex flex-wrap justify-center gap-8 text-center">
          {[
            { value: "150+", label: "Gyms Designed" },
            { value: "300+", label: "Equipment Installed" },
            { value: "24/7", label: "Support" },
            { value: "99%", label: "Client Satisfaction" },
          ].map((stat, i) => (
            <MotionBox
              key={i}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.15 }}
              className="w-[45%] md:w-[22%]"
            >
              <Typography className="text-3xl md:text-4xl font-bold text-orange-500">
                {stat.value}
              </Typography>
              <Typography className="text-gray-300 mt-2">
                {stat.label}
              </Typography>
            </MotionBox>
          ))}
        </Box>
      </Box>

      {/* CTA */}
      <Box className="py-20 px-4 md:px-8 text-center">
        <MotionBox
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <Typography className="text-3xl md:text-4xl font-bold text-orange-500 mb-4">
            Ready to Upgrade Your Gym?
          </Typography>

          <Typography className="text-gray-300 mb-8 max-w-2xl mx-auto">
            Let’s build a gym that stands out and performs at the highest level.
          </Typography>

          <Button className="bg-orange-500 hover:bg-orange-600 text-black font-bold px-10 py-3 rounded-lg">
            Contact Us
          </Button>
        </MotionBox>
      </Box>
    </Box>
  );
}
