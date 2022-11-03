import React from "react";
import { Link } from "react-router-dom";
import Logo from "../Header/img/LOGO.png";
import Button from "../components/Button";

function MainHeader () {
  return(
    <>
    <div className="oll-header">
          <div className="Logo-header">
            <div className="Only-logo">
              <img src={Logo}></img>
            </div>
            <a href="http://localhost:3000/" className="Text-logo">DOTA 2
            </a>
          </div>

          <Link to="/AboutGame" className="text-a">
            Про гру
          </Link>

          <Link to="/heroes" className="text-a">
            Герої
          </Link>

          <Link to="/news" className="text-a">
            Новини
          </Link>
      
          <div className="img-steam"></div>
          <a href="https://store.steampowered.com/app/570/Dota_2/">
            <Button title={"ГРАТИ БЕЗКОШТОВНО"}>
            </Button>
          </a>
          
        </div>
    </>
  )
}

export default MainHeader ;