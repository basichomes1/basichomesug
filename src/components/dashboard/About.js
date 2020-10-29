import React from "react";
import Footer from "./Footer";
import "../../css/Showcase.css";
import "../../css/Utilities.css";
import sponsor from "../../images/svg/logo2.svg";
import Title from "../Extras/Title";
import Hero from "./Hero";
import Banner from "./Banner";
import { Link } from "react-router-dom";
import bg from "../../images/bg/bh.png";

function AboutUs() {
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
        <div className="container grid grid-3">
          <div className="card flex">
            <Title title="MISSION " />
            <i className="fas fa-server fa-3x"></i>
            <p>
              To provide unique and utstanding and trustworthy level of services
              with adequar=te expertise in accomodation services as well as
              offering customers most compelling, best , comfortable and happy
              homes
            </p>
          </div>
          <div className="card flex">
            <Title title="MISSION " />
            <i className="fas fa-network-wired fa-3x"></i>
            <p>
              To be the quickest leading company in extending professional and
              affordable services.
            </p>
          </div>
          <div className="card flex">
            <Title title="MISSION " />
            <i className="fas fa-laptop-code fa-3x"></i>
            <p>
              Quick and efficeient service providers by making it easy to access
              your dream homes online
            </p>
          </div>
          <div className="card flex">
            <Title title="MISSION " />
            <i className="fas fa-database fa-3x"></i>
            <p>
              Quick and efficeient service providers by making it easy to access
              your dream homes online
            </p>
          </div>
          <div className="card flex">
            <Title title="VISION " />
            <i className="fas fa-power-off fa-3x"></i>
            <p>
              Quick and efficeient service providers by making it easy to access
              your dream homes online
            </p>
          </div>
          <div className="card flex">
            <Title title="VISION " />
            <i className="fas fa-upload fa-3x"></i>
            <p>
              Quick and efficeient service providers by making it easy to access
              your dream homes online
            </p>
          </div>
        </div>
      </section>

      <section className="features-sub-head bg-light py-3">
        <div className="container grid">
          <div className="text-light">
            <h1 className="md">THE TEAM</h1>
            <p>LEADERSHIP AND CHARACTER</p>
          </div>
          <img src={bg} alt="TEAM" />
        </div>
      </section>

      <div className="space">
        <Title title="SPONSORS  " span="serviceColor" />
      </div>
      <section className="languages">
        <div className="container flex">
          <div className="card">
            <h4>SPONSOR</h4>
            <img src={sponsor} alt="sponsor" />
          </div>
          <div className="card">
            <h4>PARTNER</h4>
            <img src={sponsor} alt="sponsor" />
          </div>
          <div className="card">
            <h4>SPONSOR</h4>
            <img src={sponsor} alt="sponsor" />
          </div>
          <div className="card">
            <h4>PARTNER</h4>
            <img src={sponsor} alt="sponsor" />
          </div>
        </div>
      </section>

      <Footer />
    </>
  );
}

export default AboutUs;
