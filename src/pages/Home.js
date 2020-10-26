import React from "react";
import Hero from "../components/Hero";
import Banner from "../components/Banner";
import { Link } from "react-router-dom";

import About from "../components/About";
import Footer from "../components/Footer";
import FeaturedRooms from "../components/FeaturedRooms";
import SimpleSlider from "../components/Slider";

export default function Home() {
  return (
    <>
      <Hero>
        <Banner
          title="BASIC HOMES UG"
          subtitle="FILTER YOUR SEARCH TO ONE PLACE"
        >
          <Link to="/rooms" className="btn-primary">
            OUR ROOMS
          </Link>
        </Banner>
      </Hero>

      <About />
      <SimpleSlider />
      <FeaturedRooms />
      <Footer />
    </>
  );
}
