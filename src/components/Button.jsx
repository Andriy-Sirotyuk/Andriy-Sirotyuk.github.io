import React from "react";
import './button.scss';

function Button ({title}) {
  return(
    <button className="button-component"> {title} </button>
  );
}

export default Button ;