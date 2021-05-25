import React from "react";
//@ts-ignore
import styles from "./NotFound.module.scss";
//@ts-ignore
import Img from "../../Images/error-404.png";

function NotFound() {
  return (
    <div className={styles.wrapper}>
      <img src={Img} className={styles.notFoundImg} />
      <span className={styles.notFoundText}>Oops page not found!</span>
    </div>
  );
}

export default NotFound;
