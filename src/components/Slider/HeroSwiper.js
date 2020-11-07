import React, { useState } from "react";

// react-id-swiper
import "swiper/css/swiper.css";
import Swiper from "react-id-swiper";

// custom css
import "../../css/Hero.css";

// images

import image1 from "../../images/bg/2.png";
import image2 from "../../images/bg/3.png";
import image3 from "../../images/bg/4.png";

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
  const ImgSize = {
    width: "1099px",
    height: "1099px",
  };
  return (
    <Swiper {...HeroSliderConfigs} getSwiper={setParallaxSwiper}>
      <div className="hero-slide">
        <div
          className="slide-image"
          data-swiper-parallax={parallaxAmount}
          data-swiper-parallax-opacity={parallaxOpacity}
          style={ImgSize}
        >
          <img src={image1} alt="image1" />
        </div>
        <div className="col-md-6 offset-md-3 my-auto text-center text-white">
          <h1 className="text-uppercase mb-2 font-weight-bold">
            BASIC HOMES UGANDA
          </h1>
          <p className="mb-5 small">FIRST DISPLAY</p>
        </div>
      </div>

      <div className="hero-slide">
        <div
          className="slide-image"
          data-swiper-parallax={parallaxAmount}
          data-swiper-parallax-opacity={parallaxOpacity}
          style={ImgSize}
        >
          <img src={image2} alt="image1" />
        </div>
        <div className="col-md-6 offset-md-3 my-auto text-center text-white">
          <h1 className="text-uppercase mb-2 font-weight-bold">
            BASIC HOMES UGANDA
          </h1>
          <p className="mb-5 small">SECOND DISPLAY</p>
        </div>
      </div>

      <div className="hero-slide">
        <div
          className="slide-image"
          data-swiper-parallax={parallaxAmount}
          data-swiper-parallax-opacity={parallaxOpacity}
          style={ImgSize}
        >
          <img src={image3} alt="image1" />
        </div>
        <div className="col-md-6 offset-md-3 my-auto text-center text-white">
          <h1 className="text-uppercase mb-2 font-weight-bold">
            BASIC HOMES UGANDA
          </h1>
          <p className="mb-5 small">THIRD DISPLAY</p>
        </div>
      </div>
    </Swiper>
  );
};

export default HeroSwiper;
