import React, { useEffect, useState } from "react";
import SliderHeroes from "./SliderHeroes"


import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import Slider from "react-slick";


const settings_4 = {
  arrows: false,
  draggable:true,
  initialSlide: 21,
  rtl: true,
  swipe: false,
  accessibility: false,
  draggable:false,
  LazyLoad:'ondemand',
  edgeFriction: -0.15,
  centerMode: true,
  waitForAnimate: true,
  rows: 1,
  autoplay: true,
  autoplaySpeed: 10,
  dots: false,
  infinite: true,
  speed: 8000,
  slidesToShow: 4,
  slidesToScroll: 5,
};



function SliderComponentFore () {

  const [heroesSlider, setHeroesSlider] = useState([]);
  const url = "https://api.opendota.com/api/heroStats";
  const fetchHeroes = () =>{
    fetch(url)
    .then((response) => response.json())
    .then((data) => setHeroesSlider(data));
  };
  useEffect(fetchHeroes, []);
  console.log(heroesSlider);
  
  return(
 <div className="slider">
  <Slider {...settings_4}>
    {heroesSlider.map(item =>
       <SliderHeroes key={item.id} item={item}/>)}

  </Slider>
 </div>
  )
}

export default SliderComponentFore;