import React from "react";
import Doctors from "./DoctorsSection/Doctors";
import HeroSection from "./HeroSection/HeroSection";
import Mission from "./MissionSection/Mission";
import ShortAbout from "./ShortAboutSection/ShortAbout";

function HomePage() {
  return (
    <div>
      <HeroSection />
      <ShortAbout />
      <Mission />
      <Doctors />
    </div>
  );
}

export default HomePage;
