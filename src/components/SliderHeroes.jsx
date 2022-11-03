import React from "react";
import "./SliderHeroes.scss";


function SliderHeroes ({item}) {
  return(
    <div>
      <div className="heroes-oll-slider" key={item.id}>
              <a className="name-heroes-slider">{item.localized_name}</a>
              <img className="chaing-img-slider" src={`https://api.opendota.com${item.img}`} alt=""/>
            </div>
    </div>
  )
}

export default SliderHeroes;