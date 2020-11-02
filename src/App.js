import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import "./css/App.css";
import Home from "./pages/Home";
import Rooms from "./pages/Rooms";
import SingleRoom from "./pages/SingleRoom";
import Error from "./pages/Error";
import Jobs from "./pages/Jobs";
import Navbar from "./components/Navbar/Navbar";
import Contact from "./pages/Contact";
import ProjectDetails from "./components/projects/ProjectDetails";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import SignIn from "./components/auth/SignIn";
import SignUp from "./components/auth/SignUp";
import CreateProject from "./components/projects/CreateProject";
import Profile from "./pages/Profile";
import AboutUs from "./pages/AboutUs";
import ScrollToTop from "./components/Extras/ScrollToTop";

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

        <Route component={Error} />
      </Switch>
    </BrowserRouter>
  );
}

export default App;
