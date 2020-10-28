import React from "react";
import Hero from "../components/Hero";
import Banner from "../components/Banner";
import { Link } from "react-router-dom";

import Footer from "../components/Footer";

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

      <Footer />
    </>
  );
}

export default AboutUs;
