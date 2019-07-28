import React from "react";

const SpecialButton = (props) => {
  return (
    <button className={`specials-${props.index}`}>
    {props.specialBtn}
    </button>
  );
  };

export default SpecialButton;