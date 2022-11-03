import React, { useEffect, useState } from "react";
import SliderHeroes from "./SliderHeroes"


import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import Slider from "react-slick";
import SliderGame from "./GameSlider";


const settings_6 = {
  vertical: true,
  verticalSwiping:true,
  arrows: false,
  draggable:true,
  initialSlide: 200,
  rtl: true,
  swipe: true,
  accessibility: true,
  draggable:false,
  LazyLoad:'ondemand',
  edgeFriction: -0.15,
  centerMode: true,
  waitForAnimate: true,
  rows: 1,
  autoplay: true,
  autoplaySpeed: 20,
  dots: false,
  infinite: true,
  speed: 8000,
  slidesToShow: 18.5,
  slidesToScroll: 2,
};



function SliderComponentSix () {

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
  <Slider {...settings_6}>
    {heroesSlider.map(item =>
       <SliderGame key={item.id} item={item}/>)}

  </Slider>
 </div>
  )
}

export default SliderComponentSix;