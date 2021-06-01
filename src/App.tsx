import "./App.scss";
import MainNavBar from "./Components/MainNavbar/MainNavBar";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import NotFound from "./Pages/404Page/NotFound";
import HomePage from "./Pages/HomePage/HomePage";
import Footer from "./Components/Footer/Footer";
import ContactUs from "./Pages/ContactUsPage/ContactUs";
import LogIn from "./Pages/LoginPage/Login";
import Appointment from "./Pages/AppointmentPage/Appointment";
import UserDashborad from "./Pages/UserDashborad/UserDashborad";

function App() {
  return (
    <div className="App">
      <Router>
        <MainNavBar />
        <Switch>
          <Route exact path="/">
            <HomePage />
          </Route>
          <Route exact path="/contact">
            <ContactUs />
          </Route>
          <Route exact path="/login">
            <LogIn />
          </Route>
          <Route exact path="/appointment">
            <Appointment />
          </Route>
          <Route path="/dashborad/:id">
            <UserDashborad />
          </Route>
          <Route path="/*">
            <NotFound />
          </Route>
        </Switch>
        <Footer />
      </Router>
    </div>
  );
}

export default App;
