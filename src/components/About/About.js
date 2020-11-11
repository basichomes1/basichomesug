import React from "react";
import Footer from "../dashboard/Footer";
import "../../css/About.css";
import Title from "../Extras/Title";
import Hero from "../dashboard/Hero";
import Banner from "../dashboard/Banner";
import { Link } from "react-router-dom";
import { Button } from "../Button/Button";

function AboutUs() {
  const trialtest = {
    width: "100%",
    height: "100%",
    background: "var(--purple)",
    display: "flex",
    flexDirection: "column",
    justifyContent: "space-evenly",
    alignItems: "center",
    position: "relative",
  };
  return (
    <>
      <Hero hero="roomsHero">
        <Banner title="ABOUT US" subtitle="">
          <Link to="/rooms" className="btn-primary">
            OUR ROOMS
          </Link>
        </Banner>
      </Hero>

      <div style={trialtest}>
        <div className="cardd">
          <Title title="WHO WE ARE" span="about" />
          <div className="text-about-1">
            <div className="onee">
              <p>
                BASIC HOMES UG is an online platform with the major Aim of
                linking a student/tenant to a House Owner/ Hostel Manager in the
                quickest way possible and turn students skills to money by
                offering their services to individuals in need of it. We Operate
                from central districts of uganda but coordinating to help
                students and migrants in all parts of the country and East
                African Community. To provide unique , outstanding and
                trustworthy level of services with adequate expertise in
                accomodation services as well as offering customers most
                compelling, best , comfortable and happy homes
              </p>

              <Button
                buttonStyle="btn--outline "
                buttonSize="btn--large"
                buttonColor="red"
              >
                <p className="move">READ MORE</p>
              </Button>
            </div>
          </div>
        </div>

        <div className="cardd cardd-one">
          <Title title="WHAT WE DO" span="about" />
          <div className="text-about">
            <div className="one">
              <h1>EFFICIENT DELIVERY</h1>
              <p>WE DELIVER WHAT IS AVAILABLE</p>
              <Button
                buttonStyle="btn--outline "
                buttonSize="btn--large"
                buttonColor="red"
              >
                <p className="move">READ MORE</p>
              </Button>
            </div>
            <div className="second">
              <h1>SKILLS PROMOTION</h1>
              <p>
                AWARENESS TO SKILLSET OF STUDENTS AND CREATING A PLATFORM TO
                SHARE THIS SKILL
              </p>
              <Button
                buttonStyle="btn--outline "
                buttonSize="btn--large"
                buttonColor="red"
              >
                <p className="move">READ MORE</p>
              </Button>
            </div>
          </div>
        </div>
        <div className="cardd">
          <Title title="TERMS AND CONDITIONS" span="about" />
          <div className="text-about-2">
            <div className="onee">
              <p>
                In order to Conduct business and provide the perfect service, we
                have laid down Specific guidelines and conditions to put into
                consideration while going through our services...
              </p>

              <Button
                buttonStyle="btn--outline "
                buttonSize="btn--large"
                buttonColor="red"
              >
                <p className="move">READ MORE</p>
              </Button>
            </div>
          </div>
        </div>
        <Title title="TEAM" />
      </div>

      <Footer />
    </>
  );
}

export default AboutUs;
