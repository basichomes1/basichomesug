import React, { Component } from "react";
import Slider from "react-slick";
import Title from "./Title";
import { FaBlackTie, FaWarehouse } from "react-icons/fa";
import { Link } from "react-router-dom";

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
        boxShadow: "2px 5px 2px 20px #f15a24",
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
        boxShadow: "2px 5px 2px 20px #f15a24",
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
        title: "SERVICE CENTER",
        info: "REGISTER YOUR  SKILLS",
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

      nextArrow: <SampleNextArrow />,
      prevArrow: <SamplePrevArrow />,
      appendDots: (dots) => (
        <div
          style={{
            backgroundColor: "#f15a24",
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
            slidesToShow: 2,
            slidesToScroll: 1,
            infinite: true,
            dots: true,
          },
        },
        {
          breakpoint: 648,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 1,
            infinite: true,
            initialSlide: 1,
            autoplay: true,
            autoplaySpeed: 3000,
            cssEase: "linear",
          },
        },
        {
          breakpoint: 700,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 1,
            infinite: true,
            initialSlide: 1,
            autoplay: true,
            autoplaySpeed: 3000,
            cssEase: "linear",
          },
        },
        {
          breakpoint: 832,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 1,
            infinite: true,
            initialSlide: 1,
            autoplay: true,
            autoplaySpeed: 3000,
            cssEase: "linear",
          },
        },
        {
          breakpoint: 480,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1,
            fade: true,
            autoplay: true,
            autoplaySpeed: 3000,
            cssEase: "linear",
          },
        },
      ],
    };

    return (
      <div className="services">
        <Title title="SERVICES" span="serviceColor" />
        <Slider {...settings}>
          <Link to="/rooms" className="link-color">
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
          </Link>

          <Link to="/jobs" className="link-color">
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
          </Link>
        </Slider>
      </div>
    );
  }
}
