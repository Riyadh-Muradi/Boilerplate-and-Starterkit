"use client";
import React, { useState } from "react";
import Hero1 from "./Hero-1";
import Hero2 from "./Hero-2";

const Hero = () => {
  const [heroSection, setHeroSection] = useState<"Hero-1" | "Hero-2">("Hero-1");

  return (
    <div>
      {heroSection === "Hero-1" ? (
        <Hero1 setHeroSection={setHeroSection} currentSection={heroSection} />
      ) : (
        <Hero2 setHeroSection={setHeroSection} currentSection={heroSection} />
      )}
    </div>
  );
};

export default Hero;
