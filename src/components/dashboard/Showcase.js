import React from "react";
import "../../css/Showcase.css";
import "../../css/Utilities.css";
import Hero from "./Hero";
import Banner from "./Banner";
import { Link } from "react-router-dom";
import FeaturedRooms from "../Rooms/FeaturedRooms";
import HeroSlider from "../Slider/HeroSlider";
import SimpleSlider from "../Slider/Slider";

export default function Showcase() {
  return (
    <>
      <HeroSlider />
      <Hero>
        <Banner title="GET READY" subtitle="LET'S DO THE HUNTING">
          <Link to="/rooms" className="btn-primary">
            OUR ROOMS
          </Link>
        </Banner>
      </Hero>

      <SimpleSlider />
      <FeaturedRooms />
    </>
  );
}
