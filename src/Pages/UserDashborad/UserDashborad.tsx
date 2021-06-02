import React from "react";
import SideBar from "../../Components/UserSideBar/SideBar";
import styles from "./UserDashborad.module.scss";
import { useParams } from "react-router-dom";
import AccountInfo from "./AccountInfo/AccountInfo";
import SetAppointment from "./Appointment/SetAppointment";
import Doctors from "./Doctors/Doctors";
import History from "./History/History";
import Review from "./Review/Review";

function UserDashborad() {
  // @ts-ignore
  const { id } = useParams();

  function content() {
    if (id === "accountinfo") {
      return <AccountInfo />;
    }
    if (id === "setappointment") {
      return <SetAppointment />;
    }
    if (id === "apphistory") {
      return <History />;
    }
    if (id === "doctors") {
      return <Doctors />;
    }
    if (id === "review") {
      return <Review />;
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
