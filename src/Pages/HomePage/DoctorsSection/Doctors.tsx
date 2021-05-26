import React from "react";
//@ts-ignore
import styles from "./Doctors.module.scss";

function Doctors() {
  return (
    <div className={styles.doctorWrapper}>
      <div className={styles.introWrapper}>
        <span className={styles.badge}>Find Doctors</span>
        <h3>Find Your Specialists</h3>
        <p>
          Great doctor if you need your family member to get effective immediate
          assistance, emergency treatment or a simple consultation.
        </p>
      </div>
      <div className={styles.cardWrapper}></div>
    </div>
  );
}

export default Doctors;
