import React from "react";
//@ts-ignore
import styles from "./Contact.module.scss";

function Contact() {
  return (
    <div className={styles.contactWrapper}>
      <h3>Have Question ? Get in touch!</h3>
      <p>
        Great doctor if you need your family member to get effective immediate
        assistance, emergency treatment or a simple consultation.
      </p>
      <a className={styles.conBtn} href="#">
        Contact us
      </a>
    </div>
  );
}

export default Contact;
