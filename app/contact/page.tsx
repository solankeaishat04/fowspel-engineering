/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";

import { useState } from "react";
import { Box, Typography, TextField, Button, Paper } from "@mui/material";
import { motion } from "framer-motion";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";


import { useContactSchema, ContactInput } from "@/schemas/useContact";

const MotionBox = motion(Box);

export default function ContactPage() {
  const [successMessage, setSuccessMessage] = useState("");
  const [errorMessage, setErrorMessage] = useState("");

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isSubmitting },
  } = useForm<ContactInput>({
    resolver: zodResolver(useContactSchema),
  });

  const onSubmit = async (data: ContactInput) => {
    setSuccessMessage("");
    setErrorMessage("");

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });

      const json = await res.json();
      if (!res.ok) throw new Error(json.message || "Failed to send message");

      setSuccessMessage("Message sent successfully!");
      reset();
    } catch (err: any) {
      console.error(err);
      setErrorMessage(err.message || "Something went wrong");
    }
  };

  return (
    <Box className="bg-black min-h-screen text-white">
      {/* Hero */}
      <Box className="bg-linear-to-r from-orange-600 to-orange-700 py-16 px-6 text-center">
        <Typography variant="h2" className="font-bold text-4xl md:text-6xl mb-4">
          Get in Touch
        </Typography>
        <Typography className="text-orange-100 max-w-2xl mx-auto">
          Have a question or want to discuss your gym project? We’d love to hear from you.
        </Typography>
      </Box>

      {/* Content */}
      <Box className="py-16 px-6 max-w-7xl mx-auto">
        <Box className="flex flex-col md:flex-row gap-10">
          {/* Form */}
          <Box className="w-full md:w-1/2">
            <Paper className="p-8 bg-black border border-gray-800 rounded-2xl">
              <Typography variant="h5" className="text-orange-500 font-bold mb-6">
                Send Us a Message
              </Typography>

              <form className="flex flex-col gap-4" onSubmit={handleSubmit(onSubmit)}>
                <TextField
                  label="Name"
                  {...register("name")}
                  error={!!errors.name}
                  helperText={errors.name?.message}
                  InputLabelProps={{ className: "text-gray-300" }}
                  InputProps={{ className: "text-white bg-gray-200 rounded-lg" }}
                />

                <TextField
                  label="Email"
                  {...register("email")}
                  error={!!errors.email}
                  helperText={errors.email?.message}
                  InputLabelProps={{ className: "text-gray-300" }}
                  InputProps={{ className: "text-white bg-gray-200 rounded-lg" }}
                />

                <TextField
                  label="Message"
                  multiline
                  rows={4}
                  {...register("message")}
                  error={!!errors.message}
                  helperText={errors.message?.message}
                  InputLabelProps={{ className: "text-gray-300" }}
                  InputProps={{ className: "text-white bg-gray-200 rounded-lg" }}
                />

                <Button
                  type="submit"
                  disabled={isSubmitting}
                  className="bg-linear-to-r from-orange-200 to-orange-300 text-black font-bold py-3 rounded-lg"
                >
                  {isSubmitting ? "Sending..." : "Send Message"}
                </Button>

                {successMessage && (
                  <Typography className="text-green-400">{successMessage}</Typography>
                )}
                {errorMessage && (
                  <Typography className="text-red-500">{errorMessage}</Typography>
                )}
              </form>
            </Paper>
          </Box>

          {/* Info */}
          <Box className="w-full md:w-1/2">
            <MotionBox
              initial={{ opacity: 0, x: 40 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              className="bg-linear-to-br from-gray-900 to-black p-8 rounded-2xl border border-gray-800 h-full"
            >
              <Typography variant="h5" className="text-orange-500 font-bold mb-6">
                Contact Info
              </Typography>

              <Box className="space-y-5 text-gray-300">
                <p><span className="text-orange-500 font-bold">Phone:</span> +234 803 543 4170</p>
                <p><span className="text-orange-500 font-bold">Email:</span> fowspelengineering04@gmail.com</p>
                <p><span className="text-orange-500 font-bold">Address:</span> 29, shidero fadeyi shomolu lagos </p>
              </Box>
              <Box className="mt-6"> <Typography className="font-bold text-orange-500 mb-4 text-lg"> Find Us Here: </Typography> <iframe className="w-full h-64 md:h-80 rounded-xl shadow-lg border-0" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3966.123456789!2d3.123456!3d6.123456!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x103b9b123456789%3A0x123456789abcdef!2sLagos%2C%20Nigeria!5e0!3m2!1sen!2sus!4v1678901234567!5m2!1sen!2sus" loading="lazy" title="Location Map" /> </Box>
            </MotionBox>
          </Box>
        </Box>
      </Box>

      {/* Footer */}
      <Box className="bg-gray-900 py-6 text-center text-gray-400">
        <p>
          <span className="text-orange-500 font-bold">Business Hours:</span>{" "}
          Mon–Fri 8AM–6PM | Sat 9AM–4PM
        </p>
        <p className="mt-1">We typically respond within 24 hours</p>
      </Box>
    </Box>
  );
}
