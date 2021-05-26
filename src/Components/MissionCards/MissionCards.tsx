import React from "react";
//@ts-ignore
import styles from "./MissionCards.module.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBriefcaseMedical } from "@fortawesome/free-solid-svg-icons";

function MissionCards() {
  return (
    <div className={styles.missionCardWrapper}>
      <span className={styles.icon}>
        <FontAwesomeIcon icon={faBriefcaseMedical} />
      </span>
      <div className={styles.cardContent}>
        <h5>Our Mission</h5>
        <p>
          The most well-known dummy text is the 'Lorem Ipsum', which is said to
          have originated in the 16th century.
        </p>
      </div>
    </div>
  );
}

export default MissionCards;
