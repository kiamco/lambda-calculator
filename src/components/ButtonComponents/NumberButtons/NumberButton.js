import React from "react";

const NumberButton = (props) => {
  return (
    <button className="number-button">{props.calcNumber}</button>
  );
};


export default NumberButton;