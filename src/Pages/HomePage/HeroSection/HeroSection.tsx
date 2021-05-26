import React from "react";
// @ts-ignore
import styles from "./HeroSection.module.scss";
// @ts-ignore
import Img from "../../../Images/hero_doc.png";

function HeroSection() {
  return (
    <div className={styles.heroWrapper}>
      <div className={styles.div1}>
        <h1>Find The Best Doctors</h1>
        <p>
          Great doctor if you need your family member to get immediate
          assistance, emergency treatment or a simple consultation.
        </p>
        <a href="#">Book An Appointment</a>
      </div>
      <div className={styles.div2}>
        <img src={Img} alt="Doctor Image" />
      </div>
    </div>
  );
}

export default HeroSection;
