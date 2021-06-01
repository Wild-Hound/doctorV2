import React from "react";
import SideBar from "../../Components/UserSideBar/SideBar";
import styles from "./UserDashborad.module.scss";
import { useParams } from "react-router-dom";

function UserDashborad() {
  // @ts-ignore
  const { id } = useParams();

  function content() {
    if (id === "accountinfo") {
      return <h1>Hello World</h1>;
    }
    if (id === "apphistory") {
      return <h1>Hello App History</h1>;
    }
    if (id === "review") {
      return <h1>Hello Review</h1>;
    }
  }
  return (
    <div className={styles.dashboradWrapper}>
      <SideBar />
      <div className={styles.contentWrapper}>{content()}</div>
    </div>
  );
}

export default UserDashborad;
