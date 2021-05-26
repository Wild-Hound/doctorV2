import React from "react";
//@ts-ignore
import styles from "./ShortAbout.module.scss";
//@ts-ignore
import secImg from "../../../Images/about-2.png";

function ShortAbout() {
  return (
    <div className={styles.aboutWrapper}>
      <div className={styles.div1}>
        <span className={styles.comBadge}>About Doctor's Hub</span>
        <h2>Good Services And Better Health By Our Specialists</h2>
        <p>
          Great doctor if you need your family member to get effective immediate
          <br />
          <br />
          assistance, emergency treatment or a simple consultation. The most
          well-known dummy text is the 'Lorem Ipsum', which is said to have
          originated in the 16th century. Lorem Ipsum is composed in a
          pseudo-Latin language which more or less corresponds to 'proper'
          Latin. It contains a series of real Latin words.
        </p>
        <a href="/about">Learn More</a>
      </div>
      <div className={styles.div2}>
        <img src={secImg} />
      </div>
    </div>
  );
}

export default ShortAbout;
