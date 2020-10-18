import React from "react";
import Hero from "../components/Hero";
import Banner from "../components/Banner";
import { Link } from "react-router-dom";

import Footer from "../components/Footer";

export default function Contact() {
  return (
    <>
      <Hero>
        <Banner title="CONTACT US" subtitle="+256755510968">
          <Link to="/rooms" className="btn-primary">
            OUR ROOMS
          </Link>
        </Banner>
      </Hero>

      <Footer />
    </>
  );
}
