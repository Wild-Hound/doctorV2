import React from "react";
import HeroSection from "./HeroSection/HeroSection";
import Mission from "./MissionSection/Mission";
import ShortAbout from "./ShortAboutSection/ShortAbout";

function HomePage() {
  return (
    <div>
      <HeroSection />
      <ShortAbout />
      <Mission />
    </div>
  );
}

export default HomePage;
