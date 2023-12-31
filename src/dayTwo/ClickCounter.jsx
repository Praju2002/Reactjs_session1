import React, { useState } from "react";
import PropTypes from "prop-types";


const ClickCounter = (props) => {
    const [count, setCount] = useState(0);
    // const[buttonClicked, setButtonClicked] = useState();

    // const increment =() => {
    //     setCount(count+1);
    // }

    // const decrement =() => {
    //     setCount(count-2);
    // }
    const handleClick = (step) => {
        setCount(count + step);
    }

    return (
        <div>
            <h1>ClickCounter</h1>

            <p>Count is {count}</p>
            <button onClick={() => handleClick(1)}>increment by one</button>
            <button onClick={() => handleClick(-2)}>decrement by two</button>
        </div>



    )
}
ClickCounter.prototypes = {}

export default ClickCounter;