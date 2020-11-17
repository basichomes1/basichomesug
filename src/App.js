import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import Home from "./pages/Home";
import Rooms from "./pages/Rooms";
import SingleRoom from "./pages/SingleRoom";
import Error from "./pages/Error";
import Jobs from "./pages/Jobs";
import Navbar from "./components/Navbar/Navbar";
import Contact from "./pages/Contact";
import ProjectDetails from "./components/projects/ProjectDetails";
import SignIn from "./components/auth/SignIn";
import SignUp from "./components/auth/SignUp";
import CreateProject from "./components/projects/CreateProject";
import Profile from "./pages/Profile";
import AboutUs from "./pages/AboutUs";
import ScrollToTop from "./components/Extras/ScrollToTop";
import Thanks from "./pages/Thanks";

// STYLESHEETS
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./css/App.css";
import "./css/Contact.css";
import "./css/Showcase.css";
import "./css/Utilities.css";
import "swiper/css/swiper.css";
import "./css/Hero.css";
import "./css/Rooms.css";
import "./css/Navbar.css";
import "./css/Loading.css";
import "./css/Footer.css";
import "./css/Homehero.css";
import "./css/Button.css";
import "./css/login.css";
import "./css/About.css";
import "./css/featuredrooms.css";
import "./css/roomsfilter.css";
import "./css/roomslist.css";
import "./css/singleroom.css";

function App() {
  return (
    <BrowserRouter>
      <ScrollToTop />
      <Navbar />
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/project/:id" component={ProjectDetails} />
        <Route exact path="/create" component={CreateProject} />
        <Route exact path="/profile" component={Profile} />
        <Route exact path="/rooms/" component={Rooms} />
        <Route exact path="/rooms/:slug" component={SingleRoom} />
        <Route exact path="/jobs/" component={Jobs} />
        <Route exact path="/contact/" component={Contact} />
        <Route exact path="/aboutus/" component={AboutUs} />
        <Route exact path="/signin" component={SignIn} />
        <Route exact path="/signup" component={SignUp} />

        <Route exact path="/thanks" component={Thanks} />
        <Route component={Error} />
      </Switch>
    </BrowserRouter>
  );
}

export default App;
