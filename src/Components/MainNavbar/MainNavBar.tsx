import React from "react";
// @ts-ignore
import styles from "./MainNavBar.module.scss";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import Button from "react-bootstrap/Button";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUser } from "@fortawesome/free-solid-svg-icons";
// @ts-ignore
import docImg from "../../Images/doctor.png";
import { Link } from "react-router-dom";
import { useHistory } from "react-router-dom";

function MainNavBar() {
  const history = useHistory();

  const loginBtnAct = () => {
    history.push("/dashborad/accountinfo");
  };

  return (
    <div className={styles.NavWrapper}>
      <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
        <Navbar.Brand href="/">
          <div className={styles.logoWrapper}>
            <img src={docImg} className={styles.logoImg} />
            Doctor's Hub
          </div>
        </Navbar.Brand>

        <Navbar.Collapse id="navbarScroll">
          <Nav
            className="w-100 my-2 my-lg-0"
            style={{ maxHeight: "100px" }}
            navbarScroll
          >
            <Nav.Link href="/">
              <Link to="/" className={styles.navLinks}>
                Home
              </Link>
            </Nav.Link>
            <Nav.Link>
              <Link to="/login" className={styles.navLinks}>
                Log In
              </Link>
            </Nav.Link>
            <Button
              variant="outline-info"
              className="ml-auto"
              onClick={loginBtnAct}
            >
              <FontAwesomeIcon icon={faUser} />
              <span className={styles.miscUserIconGap}></span>
              Login
            </Button>
          </Nav>
        </Navbar.Collapse>
        <Navbar.Toggle aria-controls="navbarScroll" />
      </Navbar>
    </div>
  );
}

export default MainNavBar;
