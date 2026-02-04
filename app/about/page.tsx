/* eslint-disable @next/next/no-img-element */
"use client";

import { Box, Typography } from "@mui/material";
import { motion } from "framer-motion";


const MotionBox = motion(Box);

const projects = [
  "/fowspel work img1.jpeg",
  "/fowspel work img2.jpeg",
  "/fowspel work img3.jpeg",
  "/fowspel work img4.jpeg",
  "/fowspel work img5.jpeg",
  "/fowspel work img1.jpeg",
 
];

export default function AboutPage() {
  

  

  return (
    <Box className="bg-black text-white min-h-screen">
     
      <Box className="py-20 px-4 md:px-8 max-w-6xl mx-auto">
        <MotionBox
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <Typography className="text-4xl md:text-6xl font-bold text-orange-500 mb-4">
            About Us
          </Typography>
          <Typography className="text-gray-300 text-lg max-w-3xl">
            We build innovative gym engineering solutions that combine design,
            technology, and performance.
          </Typography>
        </MotionBox>
      </Box>

     
      <Box className="py-16 px-4 md:px-8 max-w-6xl mx-auto grid md:grid-cols-2 gap-12 items-center">
        <MotionBox
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
        >
         <Typography className="text-3xl font-bold text-orange-500 mb-4">
  Meet Our CEO
</Typography>

<Typography className="text-gray-400 mb-2">
  <span className="text-white font-semibold">
    Eng. Fowowe Samuel Temitope
  </span>{" "}
  — Managing Director / Head of Operations
</Typography>

<Typography className="text-gray-300 leading-relaxed">
  Our CEO leads with a vision to redefine gym engineering in Africa
  and beyond. With years of experience in fitness infrastructure and
  technology, the goal is simple — to build gyms that perform, scale,
  and inspire.
</Typography>

        </MotionBox>

        <MotionBox
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
        >
          <img
            src="/fowspel ceo.jpeg"
            alt="CEO"
            className="rounded-2xl w-full object-cover"
          />
        </MotionBox>
      </Box>

         <Box className="py-16 px-4 md:px-8 max-w-6xl mx-auto grid md:grid-cols-2 gap-12 items-center">
        <MotionBox
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
        >
          <img
            src="/fowspel team.jpeg"
            alt="Our Team"
            className="rounded-2xl w-full object-cover"
          />
        </MotionBox>

        <MotionBox
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
        >
          <Typography className="text-3xl font-bold text-orange-500 mb-4">
            Our Team
          </Typography>
          <Typography className="text-gray-300 leading-relaxed">
            A passionate team of engineers, designers, and fitness experts
            working together to deliver world-class gym solutions.
          </Typography>
        </MotionBox>
      </Box>

     
<Box className="py-20 px-4 md:px-8 max-w-6xl mx-auto overflow-hidden">
  <Typography className="text-3xl md:text-4xl font-bold text-orange-500 text-center mb-12">
    Our Projects
  </Typography>

  
  <motion.div
    animate={{ x: ["0%", "-50%"] }}
    transition={{ repeat: Infinity, duration: 20, ease: "linear" }}
    className="flex gap-6 mb-10"
  >
    {[...projects.slice(0, 3), ...projects.slice(0, 3)].map((img, i) => (
      <Box key={i} className="min-w-[33.33%]">
        <img
          src={img}
          alt="Project"
          className="rounded-2xl w-full h-full object-cover border border-gray-800"
        />
      </Box>
    ))}
  </motion.div>

  
  <motion.div
    animate={{ x: ["-50%", "0%"] }}
    transition={{ repeat: Infinity, duration: 22, ease: "linear" }}
    className="flex gap-6"
  >
    {[...projects.slice(3, 6), ...projects.slice(3, 6)].map((img, i) => (
      <Box key={i} className="min-w-[33.33%]">
        <img
          src={img}
          alt="Project"
          className="rounded-2xl w-full h-full object-cover border border-gray-800"
        />
      </Box>
    ))}
  </motion.div>
</Box>
<Box className="py-20 px-4 md:px-8 max-w-6xl mx-auto">
  <Typography className="text-3xl md:text-4xl font-bold text-orange-500 text-center mb-12">
    What Our Clients Say
  </Typography>

  <Box className="grid md:grid-cols-3 gap-8">
    {[
      {
        name: "Purefitness Gym Lekki, Lagos",
        role: "Gym Owner",
        message:
          "Fowspel transformed our gym completely. The design, structure, and execution were top-notch. Members love the space.",
      },
      {
        name: "VGC club Ajah, Lagos",
        role: "Managing Director",
        message:
          "Professional team with solid engineering knowledge. They delivered exactly what we envisioned — on time and beyond expectation.",
      },
      {
        name: "VCP Victoria Island, Lagos",
        role: "Fitness Studio",
        message:
          "From planning to execution, everything was seamless. You can tell they truly understand gym performance and flow.",
      },
    ].map((item, index) => (
      <MotionBox
        key={index}
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6, delay: index * 0.15 }}
        className="bg-[#0f0f0f] border border-gray-800 rounded-2xl p-6 hover:border-orange-500 transition"
      >
        <Typography className="text-gray-300 mb-4 leading-relaxed">
          “{item.message}”
        </Typography>

        <Box className="mt-6">
          <Typography className="text-orange-500 font-semibold">
            {item.name}
          </Typography>
          <Typography className="text-sm text-gray-400">
            {item.role}
          </Typography>
        </Box>
      </MotionBox>
    ))}
  </Box>
</Box>



    </Box>
  );
}
