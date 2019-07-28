import React from "react";

const OperatorButton = (props) => {
  return (
       <button className="op-button">{props.calcOp}</button>
  );
};

export default OperatorButton;