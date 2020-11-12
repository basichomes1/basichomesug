import React from "react";
import "../../css/Showcase.css";
import "../../css/Utilities.css";
// import { Link } from "react-router-dom";
import FeaturedRooms from "../Rooms/FeaturedRooms";
import SimpleSlider from "../Slider/Slider";
// import Homehero from "./Homehero";
// import Homebanner from "./Homebanner";

export default function Showcase() {
  return (
    <>
      {/* <Homehero>
        <Homebanner title="GET READY" subtitle="LET'S DO THE HUNTING">
          <Link to="/rooms" className="btn-primary">
            OUR ROOMS
          </Link>
        </Homebanner>
      </Homehero> */}

      <SimpleSlider />
      <FeaturedRooms />
    </>
  );
}
