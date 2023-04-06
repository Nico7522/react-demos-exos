import React, { useState } from "react";
import style from './counter.module.css'
const Counter = ({val}) => {
    const [count, setCount] = useState(1)
   
    
    
    const increment = (val) => {
        setCount(c => c + val)
    }

    const decrement = (val) => {
        setCount(c => c - val)
    }


    return (
        <div className={style['main']}>
            <p className={style['para']}>Number is : {count}</p>
            <button className={style['button'] + ' ' + "btn btn-success"} onClick={() => increment(val)}>+{val}</button>
            <button className={style['button'] + ' ' + "btn btn-danger"} onClick={() => decrement(val)}> -{val}</button>
            <button className={style['button'] + ' ' + "btn btn-secondary"} onClick={() => setCount(1)}> Reset</button>

          
        </div>
    )
}

export default Counter;