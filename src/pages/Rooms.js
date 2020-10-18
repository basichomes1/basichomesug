import React from "react";
import Hero from "../components/Hero";
import Banner from "../components/Banner";
import { Link } from "react-router-dom";
import Footer from "../components/Footer";
import RoomsContainer from "../components/RoomsContainer";

export default function Rooms() {
  return (
    <>
      <Hero hero="roomsHero">
        <Banner title="OUR ROOMS">
          <Link to="/" className="btn-primary">
            RETURN TO HOME PAGE
          </Link>
        </Banner>
      </Hero>
      <RoomsContainer />
      <Footer />
    </>
  );
}
