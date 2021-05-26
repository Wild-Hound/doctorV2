import React from "react";
import MissionCards from "../../../Components/MissionCards/MissionCards";
//@ts-ignore
import styles from "./Mission.module.scss";

function Mission() {
  return (
    <div className={styles.missionWrapper}>
      <div className={styles.emptyDiv}></div>
      <div className={styles.contentDiv}>
        <MissionCards />
        <MissionCards />
        <MissionCards />
      </div>
    </div>
  );
}

export default Mission;
