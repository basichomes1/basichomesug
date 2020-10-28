import React from "react";
import about from "../images/bg/bg.jpg";
import "../css/About.css";
import Title from "./Title";
import { Button } from "./Button/Button";
import { Link } from "react-router-dom";

function About() {
  return (
    <>
      <section className="about">
        <Title title="ABOUT US" />
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
              <Link to="aboutus">
                <Button
                  buttonStyle="btn--outline "
                  buttonSize="btn--large"
                  buttonColor="primary"
                >
                  <p className="move">READ MORE</p>
                </Button>
              </Link>
            </p>
          </div>
        </div>
      </section>
    </>
  );
}

export default About;
