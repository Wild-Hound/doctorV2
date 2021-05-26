import React from "react";
// @ts-ignore
import styles from "./HeroSection.module.scss";
// @ts-ignore
import Img from "../../../Images/hero_doc.png";
// @ts-ignore
import comLogo from "../../../Images/amazon.svg";
// @ts-ignore
import comLogo2 from "../../../Images/google.svg";
// @ts-ignore
import comLogo3 from "../../../Images/lenovo.svg";
// @ts-ignore
import comLogo4 from "../../../Images/paypal.svg";
// @ts-ignore
import comLogo5 from "../../../Images/shopify.svg";
// @ts-ignore
import comLogo6 from "../../../Images/spotify.svg";

function HeroSection() {
  return (
    <>
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
          <img src={Img} />
        </div>
      </div>
      <div className={styles.company}>
        <img src={comLogo} />
        <img src={comLogo2} />
        <img src={comLogo3} />
        <img src={comLogo4} />
        <img src={comLogo5} />
        <img src={comLogo6} />
      </div>
    </>
  );
}

export default HeroSection;
