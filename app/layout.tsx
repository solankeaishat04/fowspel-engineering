// app/layout.tsx
import type { Metadata } from "next";
import "./globals.css";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import Providers from "./provider";

export const metadata: Metadata = {
  title: "fowspelengineering.com",
  description:
    "A portfolio showcasing the work of a talented model, featuring stunning images and captivating stories.",
  icons: {
    icon: "/fowspel_logo.png",
    shortcut: "/fowspel_logo.png",
    apple: "/fowspel_logo.png",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
})
{
  return (
    <html lang="en">
      <body>
        <Providers>
          <Navbar />
          {children}
          <Footer />
        </Providers>
      </body>
    </html>
  );
}
