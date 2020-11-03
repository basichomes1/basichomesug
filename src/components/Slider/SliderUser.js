import React, { Component } from "react";
import Slider from "react-slick";
import Title from "../Extras/Title";
import { FaBlackTie, FaWarehouse } from "react-icons/fa";
import "../../css/Slider.css";
import { settings } from "./Slidersettings";

class SliderUser extends Component {
  state = {
    services1: [
      {
        icon: <FaWarehouse />,
        title: "HOUSE RESERVATIONS",
        info: "BOOK FOR A ROOM ONLINE",
      },
    ],
    services2: [
      {
        icon: <FaBlackTie />,
        title: "SERVICE CENTER",
        info: "REGISTER YOUR  SKILLS",
      },
    ],
  };
  render() {
    return (
      <div className="services">
        <Title title="SERVICES" span="serviceColor" />
        <Slider {...settings}>
          <a href="/rooms" className="link-color">
            <div>
              {this.state.services1.map((item, index) => {
                return (
                  <article key={index} className="services-article">
                    <span>{item.icon}</span>
                    <h5>{item.title}</h5>
                    <p>{item.info}</p>
                  </article>
                );
              })}
            </div>
          </a>

          <a href="/jobs" className="link-color">
            <div>
              {this.state.services2.map((item, index) => {
                return (
                  <article key={index} className="services-article">
                    <span>{item.icon}</span>
                    <h5>{item.title}</h5>
                    <p>{item.info}</p>
                  </article>
                );
              })}
            </div>
          </a>
        </Slider>
      </div>
    );
  }
}
export default SliderUser;
