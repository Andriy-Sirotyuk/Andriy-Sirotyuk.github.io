import React from "react";
import Button from "../components/Button";
import "./FreePlay.scss";

function FreePlay () {
  return(
    <>
    <div className="oll-free-list">
      <div className="free-black-bacgraund">
        <div className="help-free">
        <h2 className="first-big-text">ПРИЄДНУЙТЕСЯ ДО</h2>
        <h1 className="sekond-big-text">БИТВИ</h1>
        <div className="line fore-line"></div>
        <a href="https://store.steampowered.com/app/570/Dota_2/">
          <Button title={"ГРАТИ БЕЗКОШТОВНО"}></Button>
        </a>
        </div>
      </div>
      <div className="free-bloodsiker-bacgraund"></div>
    </div>
    </>
  )
}

export default FreePlay;