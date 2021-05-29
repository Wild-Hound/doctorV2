import React from "react";
import styles from "./Login.module.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGoogle, faGithub } from "@fortawesome/free-brands-svg-icons";

function LogIn() {
  return (
    <div className={styles.loginWrapper}>
      <div className={styles.imgWrapper}></div>
      <div className={styles.logForm}>
        <form className={styles.formWrapper}>
          <h3>Log In</h3>
          <input
            type="email"
            placeholder="Email"
            id="email"
            required
            className={styles.inStyles}
          />
          <input
            type="password"
            placeholder="Password"
            id="password"
            required
            className={styles.inStyles}
          />
          <div>
            <label className={styles.rememberMe}>
              <input type="checkbox" id="remember" />
              Remember Me
            </label>
            <input type="submit" value="Log In" className={styles.loginBtn} />
          </div>
          <span className={styles.orDivider}>or</span>
          <div className={styles.providerHolder}>
            <button className={styles.providerBtn} id={styles.google}>
              <FontAwesomeIcon icon={faGoogle} />
              Log In With Google
            </button>
            <button className={styles.providerBtn} id={styles.github}>
              <FontAwesomeIcon icon={faGithub} />
              Log In With Github
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default LogIn;
