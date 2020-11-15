import React from "react";
import Footer from "../dashboard/Footer";
import Hero from "../dashboard/Hero";
import Banner from "../dashboard/Banner";
import { Link } from "react-router-dom";
import img1 from "../../images/bg/6.jpg";
import img2 from "../../images/bg/basicbig.png";
import Title from "../Extras/Title";
import { Button } from "../Button/Button";

function AboutUs() {
  return (
    <>
      <Hero hero="roomsHero">
        <Banner title="ABOUT US" subtitle="">
          <Link to="/rooms" className="btn-primary">
            OUR ROOMS
          </Link>
        </Banner>
      </Hero>

      <div className="about-bg">
        <div className="about-container">
          <div className="about-card first-flex">
            <div className="about-imgbx">
              <img src={img1} alt="image1" />
            </div>

            <div className="about-content">
              <div>
                <Title title="WHO WE ARE" />
                <div className="about-content-text">
                  <p>
                    BASIC HOMES UG is an online platform with the major Aim of
                    linking a student/tenant to a Hostel Manager in the quickest
                    way possible and turn students skills to money by offering
                    their services to individuals in need of it. We Operate from
                    central districts of uganda but coordinating to help
                    students and migrants in all parts of the country and East
                    African Community. To provide unique , outstanding and
                    trustworthy level of services with adequate expertise in
                    accomodation services as well as offering customers most
                    compelling, best , comfortable and happy homes
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="about-card second-flex">
            <div className="about-imgbx">
              <img src={img2} alt="image1" />
            </div>
            <div className="about-content ">
              <Title title="WHAT WE DO" />
              <div className="about-content-text">
                <div className="one">
                  <p>
                    Creating A Platform for Awareness to housing Accomodation
                    availaibilty and as well To Promote The SKills of Students
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="about-card first-flex">
            <div className="about-imgbx">
              <img src={img1} alt="image1" />
            </div>

            <div className="about-content">
              <Title title="TEAM" />
              <div className="about-content-text">
                <p>BASIC HOMES UG consists of well dedicated Members</p>
              </div>
            </div>
          </div>

          <div className="about-card second-flex">
            <div className="about-imgbx">
              <img src={img2} alt="image1" />
            </div>
            <div className="about-content ">
              <Title title="TERMS & CONDITIONS" />
              <div className="about-content-text">
                <p>
                  In order to Conduct business and provide the perfect service,
                  we have laid down Specific guidelines and conditions to put
                  into consideration while going through our services...
                </p>
              </div>
              <Button
                buttonStyle="btn--outline "
                buttonSize="btn--large"
                buttonColor="red"
              >
                <p className="move">READ MORE</p>
              </Button>
            </div>
          </div>

          <div className="about-card second-flex">
            <div className="about-imgbx mission">
              <Title title="VISION" />
            </div>
            <div className="about-content  vision">
              <Title title="MISSION" />
              <div className="about-content-text"></div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}

export default AboutUs;
