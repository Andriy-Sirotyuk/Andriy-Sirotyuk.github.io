import React from "react";
import "./List_heroes.scss";
import Button from "../components/Button";
import SliderComponentOne from "../components/SliderComponent";
import SliderComponentTwo from "../components/SliderComponentTwo";
import SliderComponentThree from "../components/SliderComponentThree";
import SliderComponentFore from "../components/SliderComponentFore";
import SliderComponentFive from "../components/SliderComponentFive";

function ListHeroes () {
  return(
    <div className="main-list-heroes">
      <h2 className="list-heroes-h2">
        <p className="first-big-text">КОГО ВИ</p>
        <p className="sekond-big-text">ОБИРАЄТЕ?</p>
      </h2>
      <div className="line line-second"></div>
      <p className="list-heroes-text">
      Чарівники-тактики, брутальні здоровані, спритні розвідники — вибір серед героїв Dota 2 вражаюче величезний і безмежно різноманітний. На шляху до перемоги ви застосовуватимете неймовірні здібності та руйнівні ультимативні вміння.
      </p>
      <div className="button-help-center">
      <a href="http://localhost:3000/heroes">
        <Button title={"ДИВИТИСЯ ВСІХ ГЕРОЇВ"}></Button>
      </a>
      </div>
      <div className="oll-slider-help">
      <div className="oll-slider">
        <SliderComponentTwo/>
        <SliderComponentThree/>
        <SliderComponentFore/>
        <SliderComponentFive/>
        <SliderComponentOne/>
      </div>
      </div>
    </div>
  );
}

export default ListHeroes ;