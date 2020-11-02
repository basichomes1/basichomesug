import React from "react";
import Footer from "./Footer";
import "../../css/Showcase.css";
import "../../css/Utilities.css";
// import sponsor from "../../images/svg/logo2.svg";
import Title from "../Extras/Title";
import Hero from "./Hero";
import Banner from "./Banner";
import { Link } from "react-router-dom";

import { Button } from "../Button/Button";
import Carousel from "react-elastic-carousel";
import AboutTeam from "./AboutTeam";

function AboutUs() {
  const breakPoints = [{ width: 1, itemsToShow: 1 }];
  return (
    <>
      <Hero>
        <Banner title="ABOUT US" subtitle="">
          <Link to="/rooms" className="btn-primary">
            OUR ROOMS
          </Link>
        </Banner>
      </Hero>

      <section className="features-main my-2">
        <div className="container grid grid-3 my-3">
          <div className="card flex">
            <Title title="MISSION " />

            <p>
              BASIC HOMES UG is an online platform with the major Aim of linking
              a student/tenant to a House Owner/ Hostel Manager in the quickest
              way possible and turn students skills to money by offering their
              services to individuals in need of it. We Operate from districts
              of uganda but coordinating to help students and migrants in all
              parts of the country and extend to other parts of the East African
              Commuinity. To provide unique , outstanding and trustworthy level
              of services with adequate expertise in accomodation services as
              well as offering customers most compelling, best , comfortable and
              happy homes
            </p>
          </div>

          <div className="card flex">
            <Title title="VISION " />

            <p>
              To be the quickest leading company in extending professional and
              affordable HOUSE MANAGEMENT SERVICES.
            </p>
          </div>
          <div className="card flex">
            <Title title="TERMS AND CONDITIONS " />

            <p>
              In order to Conduct business and provide the perfect service, we
              have laid down Specific guidelines and conditions to put into
              consideration while going through our services...
            </p>
            <Button buttonStyle="btn--primary">READ MORE</Button>
          </div>
        </div>
      </section>

      <div className="aboutSlider">
        <Title title="THE TEAM" span="serviceColor" />
        <Carousel breakPoints={breakPoints}>
          <AboutTeam title="CEO" />
          <AboutTeam title="SECRETARY" />
          <AboutTeam title="MARKETING MANAGER" />
        </Carousel>
      </div>

      <div className="space">
        <Title title="SPONSORS  " span="serviceColor" />
      </div>
      <section className="languages">
        <div className="container flex">
          <div className="card">
            <h4>SPONSOR</h4>
            {/* <img src={sponsor} alt="sponsor" /> */}
          </div>
          <div className="card">
            <h4>PARTNER</h4>
            {/* <img src={sponsor} alt="sponsor" /> */}
          </div>
          <div className="card">
            <h4>SPONSOR</h4>
            {/* <img src={sponsor} alt="sponsor" /> */}
          </div>
          <div className="card">
            <h4>PARTNER</h4>
            {/* <img src={sponsor} alt="sponsor" /> */}
          </div>
        </div>
      </section>

      <Footer />
    </>
  );
}

export default AboutUs;
