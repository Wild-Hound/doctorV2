import React from "react";
import styles from "./Sidebar.module.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faUserCircle,
  faHistory,
  faStarHalfAlt,
  faAngleDoubleLeft,
  faAngleDoubleRight,
} from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";

function SideBar() {
  return (
    <div className={styles.sideBarWrapper}>
      <div className={styles.backBtn}>
        <span className={styles.icon}>
          <FontAwesomeIcon icon={faAngleDoubleLeft} />
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
        <Link to="/dashborad/apphistory">
          <div className={styles.dashboradMenu}>
            <span className={styles.icon}>
              <FontAwesomeIcon icon={faHistory} />
            </span>
            Appointment History
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
    </div>
  );
}

export default SideBar;
