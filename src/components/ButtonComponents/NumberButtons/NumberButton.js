import React from "react";

const NumberButton = (props) => {

  const click = () => props.calcNumber
  return (
    <button className={`number-button-${props.index}`} onClick={click} >{props.calcNumber}</button>
  );
};


export default NumberButton;