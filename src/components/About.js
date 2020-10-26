import React from "react";
import logo from "../images/logo.svg";
import "./About.css";
import Loading from "./Loading";

function About() {
  return (
    <section className="about">
      <Loading />
      <div className="abouty">
        <h1>ABOUT US SECTION</h1>
      </div>
      <div className="abouti">
        <img src={logo} alt="logo" width="100px" height="100px" />
      </div>
    </section>
  );
}

export default About;
