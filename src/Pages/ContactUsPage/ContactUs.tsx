import React, { useState } from "react";
import ContactForm from "../../Components/ContantForm/ContactForm";
//@ts-ignore
import styles from "./ContactUs.module.scss";

function ContactUs() {
  return (
    <>
      <div className={styles.contactWrapper}>
        <div className={styles.heading}>
          <h3>Contact Us</h3>
          <p>
            Great doctor if you need your family member to get effective
            immediate assistance, emergency treatment or a simple consultation.
          </p>
        </div>
      </div>
      <div className={styles.formbody}>
        <ContactForm />
      </div>
    </>
  );
}

export default ContactUs;
