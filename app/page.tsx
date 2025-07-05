"use client";

import AboutSection from "@/components/ui/AboutSection";
import GallerySection from "@/components/ui/GallerySection";
import HeroSection from "@/components/ui/HeroSection";
import Navbar from "@/components/ui/Navbar";
export default function Home() {
  return (
    <>
      <Navbar />
      <HeroSection />

      <AboutSection />

      <GallerySection />
    </>
  );
}
