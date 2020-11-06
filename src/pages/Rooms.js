import React from "react";
import Hero from "../components/dashboard/Hero";
import Banner from "../components/dashboard/Banner";
import { Link } from "react-router-dom";
import Footer from "../components/dashboard/Footer";
import RoomsContainer from "../components/Rooms/RoomsContainer";
import ScrollToTop from "../components/Extras/ScrollToTop";

export default function Rooms() {
  return (
    <>
      <ScrollToTop />
      <Hero hero="roomsHero">
        <Banner title="OUR ROOMS">
          <Link to="/" className="btn-primary">
            BACK TO HOME
          </Link>
        </Banner>
      </Hero>
      <RoomsContainer />
      <Footer />
    </>
  );
}
