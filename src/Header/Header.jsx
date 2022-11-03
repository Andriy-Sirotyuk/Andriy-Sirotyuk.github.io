import React from "react";
import { Link } from "react-router-dom";
import "./Header.scss";
import Logo from "../Header/img/LOGO.png";
import Button from "../components/Button";

function Header() {
  return (
    <>
      <header className="main-header">
        
        <h2 className="heder-text-h2">«СУЧАСНИЙ ШЕДЕВР БАГАТОКОРИСТУВАЦЬКИХ ІГОР.»</h2>
        <p className="heder-text-p">
          DESTRUCTOID
        </p>
        <div className="line first-line"></div>
      </header>
    </>
  );
}

export default Header;
