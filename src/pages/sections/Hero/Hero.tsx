"use client";
import React, { useState } from "react";
import Hero2 from "./Hero-2";

const Hero = () => {
  const [heroSection, setHeroSection] = useState<"Hero-1" | "Hero-2">("Hero-1");

  return (
    <div>
      {heroSection === "Hero-1" && (
        <Hero2 setHeroSection={setHeroSection} currentSection={heroSection} />
      )}
      {heroSection === "Hero-2" && (
        <Hero2 setHeroSection={setHeroSection} currentSection={heroSection} />
      )}
    </div>
  );
};

export default Hero;
