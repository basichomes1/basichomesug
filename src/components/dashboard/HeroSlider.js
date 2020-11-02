import React, { Component } from "react";
import Carousel from "react-elastic-carousel";
import Herocontent from "./Herocontent";

export default class HeroSlider extends Component {
  render() {
    const breakPoints = [{ width: 1, itemsToShow: 1 }];
    return (
      <div className="heroslider">
        <Carousel breakPoints={breakPoints}>
          <Herocontent slideTitle="FIRST DISPLAY" />
          <Herocontent slideTitle="SECOND DISPLAY" />
          <Herocontent slideTitle="THIRD DISPLAY" />
        </Carousel>
      </div>
    );
  }
}
