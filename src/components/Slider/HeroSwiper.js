import React, { useState } from "react";

// react-id-swiper
import "swiper/css/swiper.css";
import Swiper from "react-id-swiper";

// custom css
import "../../css/Hero.css";

// images

import image2 from "../../images/bg/2.jpg";
import image3 from "../../images/bg/3.jpg";
import image4 from "../../images/bg/4.jpg";

// slider configuration
const HeroSliderConfigs = {
  containerClass: "swiper-container hero-slider",
  parallax: true,
  centeredSlides: true,
  grabCursor: true,
  loop: true,
  speed: 1200,
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
  spaceBetween: 0,

  autoplay: {
    delay: 2500,
    disableOnInteraction: false,
  },
};

// slider component
const HeroSwiper = () => {
  const [parallaxSwiper, setParallaxSwiper] = useState(null);
  const parallaxAmount = parallaxSwiper ? parallaxSwiper.width * 0.55 : 0;
  const parallaxOpacity = 0.2;

  const ImgContainer = {
    width: "100%",
    height: "100%",
  };
  return (
    <Swiper {...HeroSliderConfigs} getSwiper={setParallaxSwiper}>
      <div className="hero-slide">
        <div
          className="slide-image"
          data-swiper-parallax={parallaxAmount}
          data-swiper-parallax-opacity={parallaxOpacity}
          style={ImgContainer}
        >
          <img src={image2} alt="image1" />
        </div>
        {/* <div className="col-md-6 offset-md-3 my-auto text-center text-white">
          <h1 className="text-uppercase mb-2 font-weight-bold">
            BASIC HOMES UGANDA
          </h1>
          <p className="mb-5 small">SECOND DISPLAY</p>
        </div> */}
      </div>

      <div className="hero-slide">
        <div
          className="slide-image"
          data-swiper-parallax={parallaxAmount}
          data-swiper-parallax-opacity={parallaxOpacity}
          style={ImgContainer}
        >
          <img src={image3} alt="image1" />
        </div>
        {/* <div className="col-md-6 offset-md-3 my-auto text-center text-white">
          <h1 className="text-uppercase mb-2 font-weight-bold">
            BASIC HOMES UGANDA
          </h1>
          <p className="mb-5 small">THIRD DISPLAY</p>
        </div> */}
      </div>

      <div className="hero-slide">
        <div
          className="slide-image"
          data-swiper-parallax={parallaxAmount}
          data-swiper-parallax-opacity={parallaxOpacity}
          style={ImgContainer}
        >
          <img src={image4} alt="image1" />
        </div>
        {/* <div className="col-md-6 offset-md-3 my-auto text-center text-white">
          <h1 className="text-uppercase mb-2 font-weight-bold">
            BASIC HOMES UGANDA
          </h1>
          <p className="mb-5 small">THIRD DISPLAY</p>
        </div> */}
      </div>
    </Swiper>
  );
};

export default HeroSwiper;
