import React, { useState } from "react";

const Display = (props) => {
    const [dispayedNum, setDisplayedNum] = useState(0);
    return (
    <div className="display"> 
        <p>{dispayedNum}</p> 
    </div>
    
    );
};

export default Display;