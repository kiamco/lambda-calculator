import React, { useState } from "react";
import SpecialButton from "./SpecialButton"
//import any components needed

//Import your array data to from the provided data file

const Specials = (props) => {
  // STEP 2 - add the imported data to state
  const [spButton, setSpButton] = useState(props.specialBtn)
  
  return (
    <div className="specials">
      {
        spButton.map((el, index) => <SpecialButton specialBtn={el} index={index} />)
      }
    </div>
  );
};


export default Specials;