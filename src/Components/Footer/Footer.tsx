import React from "react";
//@ts-ignore
import styles from "./Footer.module.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPhone, faMapMarkerAlt } from "@fortawesome/free-solid-svg-icons";
import {
  faFacebook,
  faInstagramSquare,
  faTwitterSquare,
  faLinkedin,
} from "@fortawesome/free-brands-svg-icons";
import { faEnvelope } from "@fortawesome/free-regular-svg-icons";

function Footer() {
  return (
    <div className={styles.footerWrapper}>
      <div className={styles.content}>
        <div>
          <h4>Doctor's Hub</h4>
          <p>
            Great doctor if you need your family member to get effective
            immediate assistance, emergency treatment or a simple consultation.
          </p>
        </div>
        <div className={styles.reachUs}>
          <h5>Reach us</h5>
          <ul>
            <li>
              <FontAwesomeIcon icon={faEnvelope} /> testmail404@fiction.com
            </li>
            <li>
              <FontAwesomeIcon icon={faPhone} /> +152 534-468-854
            </li>
            <li>
              <FontAwesomeIcon icon={faMapMarkerAlt} /> 589 Johnson Ave,
              Brooklyn, NY 11237, United States
            </li>
          </ul>
          <div className={styles.socialIcons}>
            <a href="#">
              <FontAwesomeIcon icon={faFacebook} />
            </a>
            <a href="#">
              <FontAwesomeIcon icon={faInstagramSquare} />
            </a>
            <a href="#">
              <FontAwesomeIcon icon={faTwitterSquare} />
            </a>
            <a href="#">
              <FontAwesomeIcon icon={faLinkedin} />
            </a>
          </div>
        </div>
      </div>
      <div className={styles.copyRight}>Developed by Yasin Khan</div>
    </div>
  );
}

export default Footer;
