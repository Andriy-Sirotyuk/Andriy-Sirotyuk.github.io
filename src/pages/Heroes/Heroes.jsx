import React, { useState, useEffect } from "react";
import Strong from "./img/Strong.svg";
import Rhombus from "./img/Rhombus.svg";
import { Link } from "react-router-dom";
import "./Heroes.scss";

function Heroes() {
  const [heroesList, setHeroesList] = useState([]);
  const url = "https://api.opendota.com/api/heroStats";
  const fetchHeroes = () => {
    fetch(url)
      .then((response) => response.json())
      .then((data) => setHeroesList(data));
    // .then((data) => console.log(data));
  };
  useEffect(fetchHeroes, []);
  console.log(heroesList);
  function filterByStreng(){
    const filterHeroes = heroesList.filter((item)=>{
      return item.primary_attr==="str"
    })
    setHeroesList(filterHeroes)
  }
  function filterByAgila(){
    const filterHeroesAgila = heroesList.filter((item)=>{
      return item.primary_attr==="agi"
    })
    setHeroesList(filterHeroesAgila)
  }
  function filterByIntelekt(){
    const filterHeroesIntelekt = heroesList.filter((item)=>{
      return item.primary_attr==="int"
    })
    setHeroesList(filterHeroesIntelekt)
  }

  
    const strCheang = heroesList.filter((item)=>
    {
      return "str"==="https://cdn.cloudflare.steamstatic.com/apps/dota2/images/dota_react/icons/hero_strength.png"

      
    })
    
  
  
  return (
    <>
      <div className="main-heroes">
        <h1 className="oll-text-heroes tuke-heroes-text">Виберіть героя</h1>
        <h2 className="oll-text-heroes text-help-h2">
          Список героїв у Dota 2 величезний і безмежно різноманітний: тут ви
          зустрінете і магів-тактиків, і лютих громил, і хитромудрих негідників.
          Їхні неймовірні здібності та нищівні ульти неодмінно приведуть вас до
          перемоги.
        </h2>

        <div className="filter-container">
          <div className="felp-container">
            <h3 className="oll-text-heroes big-text-heroes">Фільтр</h3>
            <div className="litel-filter-container">
              <p className="oll-text-heroes diferent-text">Атрибут</p>
              <div onClick={filterByStreng} className="power-box"> </div>
              <div onClick={filterByAgila} className="power-box agila"> </div>
              <div onClick={filterByIntelekt} className="power-box intelekt"> </div>
              <div onClick={fetchHeroes} className="arrow"></div>
              <div className="litel-filter-container">
                <p className="oll-text-heroes diferent-text">Складність</p>
                <div className="oll-rhombus">
                  <img className="Rhombus-img" src={Rhombus} alt="" />
                  <img className="Rhombus-img" src={Rhombus} alt="" />
                  <img className="Rhombus-img" src={Rhombus} alt="" />
                </div>
              </div>
              <div>
                <input className="input-filter" type="text" />
              </div>
            </div>
          </div>
        </div>
        <div className="heroes-container-box">
          {heroesList.map((item) => (
            <div className="heroes-oll-box" key={item.id}>
              <a className="name-heroes">{item.localized_name}</a>
              <img className="chaing-img" src={`https://api.opendota.com${item.img}`} alt=""/>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}

export default Heroes;
