import React from "react";

import Footer from "../components/dashboard/Footer";
import Showcase from "../components/dashboard/Showcase";

import HeroSwiper from "../components/Slider/HeroSwiper";

export default function Home() {
  return (
    <>
      <HeroSwiper />
      <Showcase />
      <Footer />
    </>
  );
}
