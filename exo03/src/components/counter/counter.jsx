import React, { useState } from "react";

const Counter = ({val}) => {
    const [count, setCount] = useState(1)
   
    
    
    const increment = (val) => {
        setCount(c => c + val)
    }

    const decrement = (val) => {
        setCount(c => c - val)
    }


    return (
        <div>
            <p>Number is : {count}</p>
            <button onClick={() => increment(val)}>+{val}</button>
            <button onClick={() => decrement(val)}> -{val}</button>

          
        </div>
    )
}

export default Counter;