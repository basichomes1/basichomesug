import React, { Component } from "react";
import Slider from "react-slick";
import Title from "./Title";
import {
  FaBlackTie,
  FaTruckPickup,
  FaUserTie,
  FaWarehouse,
} from "react-icons/fa";

function SampleNextArrow(props) {
  const { className, style, onClick } = props;
  return (
    <div
      className={className}
      style={{
        ...style,
        display: "block",
        background: "purple",
        borderRadius: "20px",
        boxShadow: "2px 5px 2px 20px #8d533e",
      }}
      onClick={onClick}
    />
  );
}

function SamplePrevArrow(props) {
  const { className, style, onClick } = props;
  return (
    <div
      className={className}
      style={{
        ...style,
        display: "block",
        background: "purple",
        borderRadius: "20px",
        boxShadow: "2px 5px 2px 20px #8d533e",
      }}
      onClick={onClick}
    />
  );
}

export default class SimpleSlider extends Component {
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
        title: "JOB CREATION",
        info: "REGISTER YOUR JOB SKILLS",
      },
    ],
    services3: [
      {
        icon: <FaTruckPickup />,
        title: "TRANSPORTATION",
        info: "CAN'T MOVE YOUR THINGS?? WE GOT YOU COVERED",
      },
    ],
    services4: [
      {
        icon: <FaUserTie />,
        title: "ACCOUNT CREATION",
        info: "REGISTER WITH US AND EXPLORE ",
      },
    ],
  };
  render() {
    const settings = {
      dots: true,
      dotsClass: "slick-dots slick-thumb",

      infinite: true,

      speed: 800,
      slidesToShow: 1,
      slidesToScroll: 1,
      className: "slides",
      initialSlide: 0,
      adaptiveHeight: true,
      nextArrow: <SampleNextArrow />,
      prevArrow: <SamplePrevArrow />,
      appendDots: (dots) => (
        <div
          style={{
            backgroundColor: "#8d533e",
            borderRadius: "1px",
            padding: "1px",
            marginTop: "2px",
            marginLeft: "-20px",
          }}
        >
          <ul style={{ margin: "0px" }}> {dots} </ul>
        </div>
      ),
      responsive: [
        {
          breakpoint: 1544,
          settings: {
            slidesToShow: 3,
            slidesToScroll: 1,
            infinite: true,
            dots: true,
          },
        },
        {
          breakpoint: 600,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 2,
            initialSlide: 1,
          },
        },
        {
          breakpoint: 480,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1,
          },
        },
      ],
    };

    return (
      <div className="services">
        <Title title="SERVICES" />
        <Slider {...settings}>
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
          <div>
            {this.state.services3.map((item, index) => {
              return (
                <article key={index} className="services-article">
                  <span>{item.icon}</span>
                  <h5>{item.title}</h5>
                  <p>{item.info}</p>
                </article>
              );
            })}
          </div>
          <div>
            {this.state.services4.map((item, index) => {
              return (
                <article key={index} className="services-article">
                  <span>{item.icon}</span>
                  <h5>{item.title}</h5>
                  <p>{item.info}</p>
                </article>
              );
            })}
          </div>
        </Slider>
      </div>
    );
  }
}
