import React from "react";
import about from "../images/bg/bg.jpg";
import { Link } from "react-router-dom";

import Footer from "../components/Footer";

import Title from "../components/Title";
import { Button } from "../components/Button/Button";

function AboutUs() {
  return (
    <>
      <section className="about">
        <Title title="ABOUT US" span="serviceColor" />
        <div className="abouty">
          <div className="image">
            <img src={about} alt="about" width="400px" height="400px" />
          </div>
          <div className="text">
            <p>
              <span>BASIC HOMES UG...</span> Bond a dweller directly to a
              landlord in a single click as well as promoting the skills of
              students to those who demand for them to help the students earn
              Money.
            </p>
          </div>
        </div>
      </section>
      <Footer />
    </>
  );
}

export default AboutUs;
