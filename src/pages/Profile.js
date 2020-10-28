import React from "react";
import Hero from "../components/Hero";
import Banner from "../components/Banner";
import { Link } from "react-router-dom";

import Footer from "../components/Footer";

export default function Profile() {
  return (
    <>
      <Hero>
        <Banner title="USER PROFILE" subtitle="">
          <Link to="/rooms" className="btn-primary">
            OUR ROOMS
          </Link>
        </Banner>
      </Hero>

      <Footer />
    </>
  );
}
