import React, { useState } from "react";

// react-id-swiper
import "swiper/css/swiper.css";
import Swiper from "react-id-swiper";

// custom css
import "../../css/Hero.css";

// images
import image1 from "../../images/bg/image1.jpg";
import image2 from "../../images/bg/2.png";
import image3 from "../../images/bg/3.png";
import image4 from "../../images/bg/4.png";

// slider configuration
const HeroSliderConfigs = {
  containerClass: "swiper-container hero-slider",
  parallax: true,
  centeredSlides: true,
  grabCursor: true,
  speed: 1200,
  spaceBetween: 0,
  effect: "slide",
  autoplay: {
    delay: 2500,
    disableOnInteraction: false,
  },
};

// slider component
const HeroSwiper = () => {
  const [parallaxSwiper, setParallaxSwiper] = useState(null);
  const parallaxAmount = parallaxSwiper ? parallaxSwiper.width * 0.95 : 0;
  const parallaxOpacity = 0.5;
  return (
    <Swiper {...HeroSliderConfigs} getSwiper={setParallaxSwiper}>
      <div className="hero-slide">
        <div
          className="slide-image"
          data-swiper-parallax={parallaxAmount}
          data-swiper-parallax-opacity={parallaxOpacity}
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

      <div className="hero-slide">
        <div
          className="slide-image"
          data-swiper-parallax={parallaxAmount}
          data-swiper-parallax-opacity={parallaxOpacity}
        >
          <img src={image4} alt="image1" />
        </div>
        <div className="col-md-6 offset-md-3 my-auto text-center text-white">
          <h1 className="text-uppercase mb-2 font-weight-bold">
            BASIC HOMES UGANDA
          </h1>
          <p className="mb-5 small">FOURTH DISPLAY</p>
        </div>
      </div>
    </Swiper>
  );
};

export default HeroSwiper;
