import React from "react";
//@ts-ignore
import styles from "./DoctorCard.module.scss";
//@ts-ignore
import docImg from "../../Images/05.jpg";
//@ts-ignore
import star from "../../Images/star.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faClock, faMoneyCheckAlt } from "@fortawesome/free-solid-svg-icons";
import { faHeart } from "@fortawesome/free-regular-svg-icons";

function DoctorCard() {
  return (
    <div className={styles.cardWrapper}>
      <div className={styles.topSection}>
        <img src={docImg} />
        <div className={styles.fav}>
          <FontAwesomeIcon icon={faHeart} />
        </div>
      </div>
      <div className={styles.bottomSection}>
        <p className={styles.name}>Jessica McFarlane</p>
        <p className={styles.speciality}>M.B.B.S, Dentist</p>
        <div className={styles.rating}>
          <div>
            <img src={star} />
            <img src={star} />
            <img src={star} />
            <img src={star} />
            <img src={star} />
          </div>
          <span>5 Stars</span>
        </div>
        <div className={styles.meta}>
          <div>
            <span className={styles.icon}>
              <FontAwesomeIcon icon={faClock} />
            </span>
            Mon: 2:00PM - 6:00PM
          </div>
          <div>
            <span className={styles.icon}>
              <FontAwesomeIcon icon={faMoneyCheckAlt} />
            </span>
            $ 75 USD / Visit
          </div>
        </div>
        <button className={styles.actBtn}>Book An Appointment</button>
      </div>
    </div>
  );
}

export default DoctorCard;
