import React, { useState } from "react";

const Display = () => {
    const [dispayedNum, setDisplayedNum] = useState(0);
    return <div > { dispayedNum } < /div>;
};

export default Display;