import React from "react";
import Hero from "../components/dashboard/Hero";
import Banner from "../components/dashboard/Banner";
import { Link } from "react-router-dom";
import Footer from "../components/dashboard/Footer";

export default function Contact() {
  return (
    <>
      <Hero>
        <Banner title="CONTACT US" subtitle="">
          <Link to="/rooms" className="btn-primary">
            OUR ROOMS
          </Link>
        </Banner>
      </Hero>
      <Footer />
    </>
  );
}
