import React, { Component } from "react";
import Slider from "react-slick";
import Title from "../Extras/Title";
import { FaBlackTie, FaWarehouse } from "react-icons/fa";
import "../../css/Slider.css";
import { settings } from "./Slidersettings";
import { Button } from "../Button/Button";

class SliderUser extends Component {
  state = {
    services1: [
      {
        icon: <FaWarehouse />,
        title: "HOUSE RESERVATIONS",
        info: "online booking",
      },
    ],
    services2: [
      {
        icon: <FaBlackTie />,
        title: "SERVICE CENTER",
        info: "Register  Skills",
      },
    ],
  };
  render() {
    return (
      <div className="services">
        <Title title="SERVICES" span="serviceColor" />
        <Slider {...settings}>
          <div>
            {this.state.services1.map((item, index) => {
              return (
                <article key={index} className="services-article">
                  <span>{item.icon}</span>
                  <h6>{item.title}</h6>
                  {/* <p>{item.info}</p> */}
                  <a href="/rooms" className="link-color">
                    <Button>Book </Button>
                  </a>
                </article>
              );
            })}
          </div>

          <div>
            {this.state.services2.map((item, index) => {
              return (
                <article key={index} className="services-article">
                  <span>{item.icon}</span>
                  <h6>{item.title}</h6>
                  {/* <p>{item.info}</p> */}
                  <a href="/jobs" className="link-color">
                    <Button>Register </Button>
                  </a>
                </article>
              );
            })}
          </div>
        </Slider>
      </div>
    );
  }
}
export default SliderUser;
