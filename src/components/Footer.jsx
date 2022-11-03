import React from "react";
import "./footer.scss";

function Footer() {
  return (
    <>
      <footer>
        <div className="oll-footer">
          <div className="help-footer">
            <a href="https://www.valvesoftware.com/en/about">
              <div className="valve-img"></div>
            </a>
            <a href="http://localhost:3000/">
              <div className="footer-logo"></div>
            </a>
          </div>
          <p className="footer-text">
            Dota і логотип Dota є торговими марками та/або зареєстрованими
            торговими марками Valve Corporation. 2022 Valve Corporation, усі
            права захищено.
          </p>
        </div>
      </footer>
    </>
  );
}

export default Footer;
