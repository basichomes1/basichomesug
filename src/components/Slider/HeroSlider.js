import React, { Component } from "react";
import Carousel from "react-elastic-carousel";
import Herocontent from "./Herocontent";

export default class HeroSlider extends Component {
  render() {
    const breakPoints = [{ width: 1, itemsToShow: 1 }];
    return (
      <div className="heroslider">
        <Carousel breakPoints={breakPoints}>
          <Herocontent slideTitle="BASIC HOMES INTRO" />
          <Herocontent slideTitle="BASIC HOMES FEATURES" />
          <Herocontent slideTitle="BASIC HOMES CERTIFICATION" />
        </Carousel>
      </div>
    );
  }
}
