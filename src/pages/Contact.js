import React from "react";
import Hero from "../components/dashboard/Hero";
import Banner from "../components/dashboard/Banner";
import { Link } from "react-router-dom";
import Footer from "../components/dashboard/Footer";
import "../css/Contact.css";

export default function Contact() {
  return (
    <>
      <Hero hero="roomsHero">
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
