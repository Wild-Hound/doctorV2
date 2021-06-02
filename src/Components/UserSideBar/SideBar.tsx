import React, { useEffect, useState } from "react";
import styles from "./Sidebar.module.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faUserCircle,
  faHistory,
  faStarHalfAlt,
  faHeart,
  faAngleDoubleLeft,
  faAngleDoubleRight,
  faCalendarCheck,
} from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";

function SideBar() {
  const [collapse, setCollapse] = useState(false);

  useEffect(() => {
    window.addEventListener("resize", (e) => {
      // @ts-ignore
      if (e.target.innerWidth <= 775) {
        setCollapse(true);
      }
      // @ts-ignore
      if (e.target.innerWidth > 775) {
        setCollapse(false);
      }
    });
    // this will resize the window on init visit
    if (window.innerWidth <= 775) {
      setCollapse(true);
    }
  }, []);

  const collapseBtn = () => {
    collapse ? setCollapse(false) : setCollapse(true);
  };

  return (
    <div className={collapse ? styles.collapsed : styles.sideBarWrapper}>
      <div className={styles.backBtn} onClick={collapseBtn}>
        <span className={styles.icon}>
          <FontAwesomeIcon
            icon={collapse ? faAngleDoubleRight : faAngleDoubleLeft}
          />
        </span>
      </div>
      <div className={styles.menuWrapper}>
        <Link to="/dashborad/accountinfo">
          <div className={styles.dashboradMenu}>
            <span className={styles.icon}>
              <FontAwesomeIcon icon={faUserCircle} />
            </span>
            Account Info
          </div>
        </Link>
        <Link to="/dashborad/setappointment">
          <div className={styles.dashboradMenu}>
            <span className={styles.icon}>
              <FontAwesomeIcon icon={faCalendarCheck} />
            </span>
            Set Appointment
          </div>
        </Link>
        <Link to="/dashborad/apphistory">
          <div className={styles.dashboradMenu}>
            <span className={styles.icon}>
              <FontAwesomeIcon icon={faHistory} />
            </span>
            Appointment History
          </div>
        </Link>
        <Link to="/dashborad/doctors">
          <div className={styles.dashboradMenu}>
            <span className={styles.icon}>
              <FontAwesomeIcon icon={faHeart} />
            </span>
            Shortlisted Doctors
          </div>
        </Link>
        <Link to="/dashborad/review">
          <div className={styles.dashboradMenu}>
            <span className={styles.icon}>
              <FontAwesomeIcon icon={faStarHalfAlt} />
            </span>
            Submit Review
          </div>
        </Link>
      </div>
      <div className={styles.collapsedMenu}>
        <Link to="/dashborad/accountinfo">
          <div className={styles.dashboradMenu}>
            <span className={styles.icon}>
              <FontAwesomeIcon icon={faUserCircle} />
            </span>
          </div>
        </Link>
        <Link to="/dashborad/setappointment">
          <div className={styles.dashboradMenu}>
            <span className={styles.icon}>
              <FontAwesomeIcon icon={faCalendarCheck} />
            </span>
          </div>
        </Link>
        <Link to="/dashborad/apphistory">
          <div className={styles.dashboradMenu}>
            <span className={styles.icon}>
              <FontAwesomeIcon icon={faHistory} />
            </span>
          </div>
        </Link>
        <Link to="/dashborad/doctors">
          <div className={styles.dashboradMenu}>
            <span className={styles.icon}>
              <FontAwesomeIcon icon={faHeart} />
            </span>
          </div>
        </Link>
        <Link to="/dashborad/review">
          <div className={styles.dashboradMenu}>
            <span className={styles.icon}>
              <FontAwesomeIcon icon={faStarHalfAlt} />
            </span>
          </div>
        </Link>
      </div>
    </div>
  );
}

export default SideBar;
