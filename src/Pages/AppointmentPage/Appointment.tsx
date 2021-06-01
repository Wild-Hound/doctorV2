import React from "react";
import styles from "./Appointment.module.scss";
import AppForm from "../../Components/AppForm/AppForm";

function Appointment() {
  return (
    <div className={styles.formWrapper}>
      <AppForm />
    </div>
  );
}

export default Appointment;
