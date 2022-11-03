import React from "react";
import "./GameSlider.scss";


function SliderGeme ({item}) {
  return(
    <div className="oll-game-slider">
      <div className="heroes-oll-slider-game" key={item.id}>
              <a className="name-heroes-slider-game">{item.localized_name}</a>
              <img className="chaing-img-slider-game" src={`https://api.opendota.com${item.img}`} alt=""/>
            </div>
    </div>
  )
}

export default SliderGeme;