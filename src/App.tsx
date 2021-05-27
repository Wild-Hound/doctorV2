import "./App.scss";
import MainNavBar from "./Components/MainNavbar/MainNavBar";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import NotFound from "./Pages/404Page/NotFound";
import HomePage from "./Pages/HomePage/HomePage";
import Footer from "./Components/Footer/Footer";

function App() {
  return (
    <div className="App">
      <Router>
        <MainNavBar />
        <Switch>
          <Route exact path="/">
            <HomePage />
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
