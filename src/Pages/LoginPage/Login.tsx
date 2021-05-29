import React from "react";
import styles from "./Login.module.scss";

function LogIn() {
  return (
    <div className={styles.loginWrapper}>
      <div className={styles.imgWrapper}></div>
      <div className={styles.logForm}>
        <div className={styles.formWrapper}></div>
      </div>
    </div>
  );
}

export default LogIn;
