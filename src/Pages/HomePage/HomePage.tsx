import { Accordion } from "@material-ui/core";
import React from "react";
import Accordation from "./AccordationSection/Accordation";
import Contact from "./ContactSection/Contact";
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
      <Accordation />
      <Contact />
    </div>
  );
}

export default HomePage;
