import React, { useState } from "react";

//import any components needed
import NumberButton from "./NumberButton"
//Import your array data to from the provided data file
import {numbers} from "../../../data"

const Numbers = (props) => {
  // STEP 2 - add the imported data to state
  console.log(numbers)
  const [number, setNumber] = useState(props.numbers);
  return (
    <div className="numbers">
      {/* STEP 3 - Use .map() to iterate over your array data and return a button
       component matching the name on the provided file. Pass
       it any props needed by the child component*/}
       {
       number.map((el, index) => {
        return <NumberButton calcNumber={el} index={index} />
       })
      }
    </div>
  );
};

export default Numbers;