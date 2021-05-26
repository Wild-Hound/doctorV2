import React from "react";
//@ts-ignore
import styles from "./MissionCards.module.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { IconProp } from "@fortawesome/fontawesome-svg-core";

interface Props {
  content: {
    title: string;
    parah: string;
  };
  img: IconProp;
}

export const MissionCards: React.FC<Props> = (Props) => {
  const { title, parah } = Props.content;
  return (
    <div className={styles.missionCardWrapper}>
      <span className={styles.icon}>
        <FontAwesomeIcon icon={Props.img} />
      </span>
      <div className={styles.cardContent}>
        <h5>{title}</h5>
        <p>{parah}</p>
      </div>
    </div>
  );
};
