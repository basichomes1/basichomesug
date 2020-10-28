import React from "react";
import logo from "../images/svg/logo.svg";
import "../css/About.css";

function About() {
  return (
    <section className="about">
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
