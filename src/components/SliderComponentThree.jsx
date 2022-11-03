import React, { useEffect, useState } from "react";
import SliderHeroes from "./SliderHeroes";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import Slider from "react-slick";

const settings_2 = {
  arrows: false,
  draggable: true,
  rtl: true,
  initialSlide: 40,
  swipe: false,
  accessibility: false,
  draggable: false,
  LazyLoad: "ondemand",
  edgeFriction: -0.15,
  centerMode: true,
  waitForAnimate: true,
  rows: 1,
  autoplay: true,
  autoplaySpeed: 10,
  dots: false,
  infinite: true,
  speed: 2000,
  slidesToShow: 4,
  slidesToScroll: 5,
};

function SliderComponentThree() {
  const [heroesSlider, setHeroesSlider] = useState([]);
  const url = "https://api.opendota.com/api/heroStats";
  const fetchHeroes = () => {
    fetch(url)
      .then((response) => response.json())
      .then((data) => setHeroesSlider(data));
  };
  useEffect(fetchHeroes, []);
  console.log(heroesSlider);

  return (
    <div className="slider">
      <Slider {...settings_2}>
        {heroesSlider.map((item) => (
          <SliderHeroes key={item.id} item={item} />
        ))}
      </Slider>
    </div>
  );
}

export default SliderComponentThree;
