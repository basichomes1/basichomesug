import React from "react";
import Hero from "../components/Hero";
import Banner from "../components/Banner";
import { Link } from "react-router-dom";
import Footer from "../components/Footer";
import StyledHero from "../components/StyledHero";

export default function Job() {
  return (
    <>
      <Hero>
        <Banner title="CREATE A JOB" subtitle="WORK AND STILL BE A STUDENT">
          <Link to="/" className="btn-primary">
            GET STARTED
          </Link>
        </Banner>
      </Hero>
      <StyledHero>OGU</StyledHero>
      <Footer />
    </>
  );
}
