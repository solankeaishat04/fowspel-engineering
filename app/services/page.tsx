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
    <Box sx={{ bgcolor: "#f9fafb", minHeight: "100vh" }}>
      {/* Hero Section */}
      <Box sx={{ 
        background: "linear-gradient(to right, #1e40af, #7c3aed)",
        color: "white",
        py: { xs: 8, md: 12 },
        px: { xs: 2, md: 4 },
        textAlign: "center"
      }}>
        <Typography 
          variant="h2" 
          sx={{ 
            fontWeight: 700, 
            fontSize: { xs: "2.25rem", md: "3.75rem" }, 
            mb: 2 
          }}
        >
          Advanced Gym Engineering Services
        </Typography>
        <Typography 
          variant="subtitle1" 
          sx={{ 
            fontSize: { xs: "1rem", md: "1.25rem" }, 
            maxWidth: "800px", 
            mx: "auto", 
            mb: 4 
          }}
        >
          We design, integrate, and maintain cutting-edge gyms that maximize efficiency, performance, and client satisfaction.
        </Typography>
        <Button
          variant="contained"
          size="large"
          sx={{
            bgcolor: "#fbbf24",
            color: "#000",
            fontWeight: 700,
            "&:hover": {
              bgcolor: "#f59e0b",
            },
          }}
        >
          Get a Consultation
        </Button>
      </Box>

      {/* Services Grid - Using Flexbox */}
      <Box sx={{ py: { xs: 8, md: 10 }, px: { xs: 2, md: 4 }, maxWidth: "1200px", mx: "auto" }}>
        <Typography variant="h3" sx={{ textAlign: "center", fontWeight: 600, mb: 8 }}>
          What We Offer
        </Typography>
        
        {/* Flexbox container */}
        <Box sx={{ 
          display: 'flex', 
          flexWrap: 'wrap', 
          gap: { xs: 3, md: 4 },
          justifyContent: 'center'
        }}>
          {services.map((service, index) => (
            <Box 
              key={index}
              sx={{ 
                width: { 
                  xs: '100%', 
                  sm: 'calc(50% - 12px)', 
                  lg: 'calc(25% - 12px)' 
                },
                flexShrink: 0
              }}
            >
              <MotionBox
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
              >
                <Card sx={{ 
                  boxShadow: 3,
                  borderRadius: 2,
                  transition: "box-shadow 0.3s ease, transform 0.3s ease",
                  "&:hover": { 
                    boxShadow: 6,
                    transform: "translateY(-4px)"
                  },
                  height: "100%"
                }}>
                  <CardContent sx={{ textAlign: "center", p: 4 }}>
                    <Typography variant="h1" sx={{ fontSize: "3rem", mb: 2 }}>
                      {service.icon}
                    </Typography>
                    <Typography variant="h5" sx={{ fontWeight: 700, mb: 1 }}>
                      {service.title}
                    </Typography>
                    <Typography sx={{ color: "text.secondary" }}>
                      {service.description}
                    </Typography>
                  </CardContent>
                </Card>
              </MotionBox>
            </Box>
          ))}
        </Box>
      </Box>

      {/* Stats Section - Using Flexbox */}
      <Box sx={{ 
        bgcolor: "#1e3a8a", 
        color: "white", 
        py: { xs: 8, md: 10 }, 
        px: { xs: 2, md: 4 } 
      }}>
        <Box sx={{ 
          display: 'flex', 
          flexWrap: 'wrap', 
          gap: { xs: 4, md: 8 }, 
          textAlign: "center", 
          maxWidth: "1000px", 
          mx: "auto",
          justifyContent: 'center'
        }}>
          <Box sx={{ width: { xs: 'calc(50% - 16px)', md: 'calc(25% - 24px)' } }}>
            <Typography variant="h3" sx={{ fontWeight: 700, mb: 1, fontSize: { xs: "2rem", md: "3rem" } }}>
              150+
            </Typography>
            <Typography>Gyms Designed</Typography>
          </Box>
          <Box sx={{ width: { xs: 'calc(50% - 16px)', md: 'calc(25% - 24px)' } }}>
            <Typography variant="h3" sx={{ fontWeight: 700, mb: 1, fontSize: { xs: "2rem", md: "3rem" } }}>
              300+
            </Typography>
            <Typography>Equipment Installed</Typography>
          </Box>
          <Box sx={{ width: { xs: 'calc(50% - 16px)', md: 'calc(25% - 24px)' } }}>
            <Typography variant="h3" sx={{ fontWeight: 700, mb: 1, fontSize: { xs: "2rem", md: "3rem" } }}>
              24/7
            </Typography>
            <Typography>Support Availability</Typography>
          </Box>
          <Box sx={{ width: { xs: 'calc(50% - 16px)', md: 'calc(25% - 24px)' } }}>
            <Typography variant="h3" sx={{ fontWeight: 700, mb: 1, fontSize: { xs: "2rem", md: "3rem" } }}>
              99%
            </Typography>
            <Typography>Client Satisfaction</Typography>
          </Box>
        </Box>
      </Box>

      {/* CTA Section */}
      <Box sx={{ 
        background: "linear-gradient(to right, #1e40af, #7c3aed)",
        color: "white",
        py: { xs: 8, md: 12 },
        px: { xs: 2, md: 4 },
        textAlign: "center" 
      }}>
        <Typography variant="h4" sx={{ fontWeight: 700, mb: 3, fontSize: { xs: "1.75rem", md: "2.25rem" } }}>
          Ready to Upgrade Your Gym?
        </Typography>
        <Typography sx={{ mb: 4, maxWidth: "800px", mx: "auto" }}>
          Connect with us today for a full consultation and see how we can transform your fitness business.
        </Typography>
        <Button
          variant="contained"
          size="large"
          sx={{
            bgcolor: "#fbbf24",
            color: "#000",
            fontWeight: 700,
            "&:hover": {
              bgcolor: "#f59e0b",
            },
          }}
        >
          Contact Us
        </Button>
      </Box>
    </Box>
  );
}