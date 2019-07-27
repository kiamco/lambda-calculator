import React from "react";

//import any components needed
import OperatorButton from "./OperatorButton"
//Import your array data to from the provided data file

const Operators = (props) => {
  // STEP 2 - add the imported data to state
  console.log(props)
  return (
    <div className="operators">
      {/* STEP 3 - Use .map() to iterate over your array data and return a button
       component matching the name on the provided file. Pass
       it any props needed by the child component*/}
       {
         props.operator.map(el => <OperatorButton calcOp={el} />)
       }
    </div>
  );
};

export default Operators