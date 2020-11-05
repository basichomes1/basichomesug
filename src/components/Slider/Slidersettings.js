import React from "react";
import SampleNextArrow from "./SampleNextArrow";
import SamplePrevArrow from "./SamplePrevArrow";

export const settings = {
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
        borderRadius: "100px",
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

        autoplay: true,
        autoplaySpeed: 3000,
        cssEase: "linear",
      },
    },
  ],
};
