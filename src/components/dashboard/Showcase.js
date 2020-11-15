import React from "react";
import Title from "../Extras/Title";
import FeaturedRooms from "../Rooms/FeaturedRooms";
import Slider from "../Slider/Slider";
import Homehero from "./Homehero";

export default function Showcase() {
  return (
    <>
      <Homehero>
        <Title title="SERVICES" span="about" />
        <Slider />
      </Homehero>
      <FeaturedRooms />
    </>
  );
}
