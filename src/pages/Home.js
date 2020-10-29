import React from "react";
import Footer from "../components/dashboard/Footer";
import FeaturedRooms from "../components/Rooms/FeaturedRooms";
import SimpleSlider from "../components/Extras/Slider";
import Showcase from "../components/dashboard/Showcase";

export default function Home() {
  return (
    <>
      <Showcase />
      <SimpleSlider />
      <FeaturedRooms />
      <Footer />
    </>
  );
}
