import React from "react";
import Footer from "../dashboard/Footer";
import "../../css/About.css";

import Hero from "../dashboard/Hero";
import Banner from "../dashboard/Banner";
import { Link } from "react-router-dom";

import img1 from "../../images/bg/6.jpg";

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
          <div className="about-card">
            <div className="about-imgbx">
              <img src={img1} alt="image1" />
            </div>
            <div className="about-content">
              <div>
                <h2>BASIC</h2>
                <p>BASIC HOMES</p>
              </div>
            </div>
          </div>

          <div className="about-card">
            <div className="about-imgbx">
              <img src={img1} alt="image1" />
            </div>
            <div className="about-content">
              <div>
                <h2>BASIC 2</h2>
                <p>BASIC HOMES</p>
              </div>
            </div>
          </div>

          <div className="about-card">
            <div className="about-imgbx">
              <img src={img1} alt="image1" />
            </div>
            <div className="about-content">
              <div>
                <h2>BASIC 3</h2>
                <p>BASIC HOMES</p>
              </div>
            </div>
          </div>

          <div className="about-card">
            <div className="about-imgbx">
              <img src={img1} alt="image1" />
            </div>
            <div className="about-content">
              <div>
                <h2>BASIC 4</h2>
                <p>BASIC HOMES</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </>
  );
}

export default AboutUs;
