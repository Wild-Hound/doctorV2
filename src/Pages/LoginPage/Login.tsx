import React from "react";
import styles from "./Login.module.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGoogle, faGithub } from "@fortawesome/free-brands-svg-icons";
import env from "react-dotenv";
import firebase from "firebase/app";
import "firebase/auth";
import { Tabs } from "antd";
import "antd/dist/antd.css";

const { TabPane } = Tabs;

// firebase configuration
const firebaseConfig = {
  apiKey: `${process.env.REACT_APP_API_KEY}`,
  authDomain: `${process.env.REACT_APP_PROJECT_ID}.firebaseapp.com`,
  projectId: `${process.env.REACT_APP_PROJECT_ID}`,
  storageBucket: `${process.env.REACT_APP_PROJECT_ID}.appspot.com`,
  messagingSenderId: `${process.env.REACT_APP_SENDER_ID}`,
  appId: `${process.env.REACT_APP_APP_ID}`,
  measurementId: `${process.env.REACT_APP_MES_ID}`,
};
// handling an error
!firebase.apps.length ? firebase.initializeApp(firebaseConfig) : firebase.app();

// initiating the providers
let googleProvider = new firebase.auth.GoogleAuthProvider();
let gitProvider = new firebase.auth.GithubAuthProvider();

function LogIn() {
  const googleSignIn = () => {
    firebase
      .auth()
      .signInWithPopup(googleProvider)
      .then((result) => {
        /** @type {firebase.auth.OAuthCredential} */
        var credential = result.credential;

        // This gives you a Google Access Token. You can use it to access the Google API.
        // @ts-ignore
        var token = credential.accessToken;
        // The signed-in user info.
        var user = result.user;
        console.log(user);
      })
      .catch((error) => {
        // Handle Errors here.
        var errorCode = error.code;
        var errorMessage = error.message;
        // The email of the user's account used.
        var email = error.email;
        // The firebase.auth.AuthCredential type that was used.
        var credential = error.credential;
        // ...
      });
  };

  const githubSignIn = () => {
    firebase
      .auth()
      .signInWithPopup(gitProvider)
      .then((result) => {
        /** @type {firebase.auth.OAuthCredential} */
        var credential = result.credential;

        // This gives you a GitHub Access Token. You can use it to access the GitHub API.
        // @ts-ignore
        var token = credential.accessToken;

        // The signed-in user info.
        var user = result.user;
        console.log(user);
      })
      .catch((error) => {
        // Handle Errors here.
        var errorCode = error.code;
        var errorMessage = error.message;
        // The email of the user's account used.
        var email = error.email;
        // The firebase.auth.AuthCredential type that was used.
        var credential = error.credential;
        // ...
      });
  };

  const passwordLogIn = (e: React.MouseEvent<HTMLInputElement>) => {
    e.preventDefault();
    // @ts-ignore
    const email = document.getElementById("email").value;
    // @ts-ignore
    const pass = document.getElementById("password").value;

    firebase
      .auth()
      // @ts-ignore
      .signInWithEmailAndPassword(email, pass)
      .then((userCredential) => {
        // Signed in
        var user = userCredential.user;
        console.log(user);
      })
      .catch((error) => {
        var errorCode = error.code;
        var errorMessage = error.message;
        console.log(errorMessage);
      });
  };

  return (
    <div className={styles.loginWrapper}>
      <div className={styles.imgWrapper}></div>
      <div className={styles.logForm}>
        <Tabs defaultActiveKey="1">
          <TabPane tab="Log In" key="1">
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
                <input
                  type="submit"
                  value="Log In"
                  className={styles.loginBtn}
                  onClick={(event) => {
                    passwordLogIn(event);
                  }}
                />
              </div>
              <span className={styles.orDivider}>or</span>
              <div className={styles.providerHolder}>
                <button
                  className={styles.providerBtn}
                  id={styles.google}
                  onClick={googleSignIn}
                >
                  <FontAwesomeIcon icon={faGoogle} />
                  Log In With Google
                </button>
                <button
                  className={styles.providerBtn}
                  id={styles.github}
                  onClick={githubSignIn}
                >
                  <FontAwesomeIcon icon={faGithub} />
                  Log In With Github
                </button>
              </div>
            </form>
          </TabPane>
          <TabPane tab="Create New Account" key="2">
            Content of Tab Pane 2
          </TabPane>
        </Tabs>
      </div>
    </div>
  );
}

export default LogIn;
