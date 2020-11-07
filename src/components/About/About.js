import React from "react";
import Footer from "../dashboard/Footer";
import "../../css/Showcase.css";
import "../../css/Utilities.css";
import "../../css/About.css";
import Title from "../Extras/Title";
import Hero from "../dashboard/Hero";
import Banner from "../dashboard/Banner";
import { Link } from "react-router-dom";
// import { Button } from "../Button/Button";

function AboutUs() {
  // const breakPoints = [{ width: 1, itemsToShow: 1 }];

  const trialtest = {
    width: "100%",
    height: "500px",
    background: "crimson",
    display: "flex",
    flexDirection: "column",
    justifyContent: "space-evenly",
    alignItems: "center",
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
        <Title title="MISSION" />
        <Title title="VISION" />
        <Title title="TERMS AND CONDITIONS" />
        <Title title="TEAM" />
      </div>
      {/* 
      <section className="features-main my-1">
        <div className="container grid grid-1 ">
          <div className="card flex">
            <Title title="MISSION " span=" abouttitle mission" />
            <p>
              BASIC HOMES UG is an online platform with the major Aim of linking
              a student/tenant to a House Owner/ Hostel Manager in the quickest
              way possible and turn student's skills to money by offering their
              services to individuals in need of it. We Operate from central
              districts of uganda but coordinating to help students and migrants
              in all parts of the country and extend to other parts of the East
              African Community. To provide unique , outstanding and trustworthy
              level of services with adequate expertise in accomodation services
              as well as offering customers most compelling, best , comfortable
              and happy homes
            </p>
          </div>
        </div>
      </section>

      <section className="features-main my-2">
        <div className="container grid grid-1 ">
          <div className="card flex">
            <Title title="VISION " span=" abouttitle mission" />
            <p>
              To be the quickest leading company in extending professional and
              affordable HOUSE MANAGEMENT SERVICES.
            </p>
          </div>
        </div>
      </section>

      <section className="features-main my-2">
        <div className="container grid grid-1 ">
          <div className="card flex">
            <Title
              title="TERMS AND CONDITIONS "
              span=" abouttitle mission terms"
            />
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
        <Title title="PARTNERS  " span="serviceColor" />
      </div>
      <section className="languages">
        <div className="container flex">
          <div className="card">
            <a href="https://workville.netlify.app/">
              <h2>WORKVILLE ENTERPRISE</h2>
            </a>
          </div>
        </div>
      </section> */}

      <Footer />
    </>
  );
}

export default AboutUs;
