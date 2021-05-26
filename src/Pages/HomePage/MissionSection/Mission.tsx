import React from "react";
import { MissionCards } from "../../../Components/MissionCards/MissionCards";
//@ts-ignore
import styles from "./Mission.module.scss";
import {
  faBriefcaseMedical,
  faLowVision,
  faAddressCard,
} from "@fortawesome/free-solid-svg-icons";

function Mission() {
  const info1 = {
    title: "Our Mission",
    parah: `The most well-known dummy text is the 'Lorem Ipsum', which is said to
          have originated in the 16th century.`,
  };
  const info2 = {
    title: "Our Vision",
    parah: `The most well-known dummy text is the 'Lorem Ipsum', which is said to have originated in the 16th century.`,
  };
  const info3 = {
    title: "Who We Are ?",
    parah: `The most well-known dummy text is the 'Lorem Ipsum', which is said to have originated in the 16th century.`,
  };
  return (
    <div className={styles.missionWrapper}>
      <div className={styles.emptyDiv}></div>
      <div className={styles.contentDiv}>
        <MissionCards content={info1} img={faBriefcaseMedical} />
        <MissionCards content={info2} img={faLowVision} />
        <MissionCards content={info3} img={faAddressCard} />
      </div>
    </div>
  );
}

export default Mission;
