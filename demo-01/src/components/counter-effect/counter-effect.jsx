import { useEffect, useState } from "react";

const CounterEffect = () => {

    const [count, setCount] = useState(0);
    const [isActive, setIsActive] = useState(false)

    useEffect(() => {
        console.log('hello');
        document.title = `Vous avez cliqué ${count} fois`
    })

    useEffect(() => {
        return () => console.log('destroy');
        
    })
    return (
        <>
        <h3 onClick={() => setIsActive(!isActive)} style={isActive ? {color: "red"} : {color: "white"}}>Counter title</h3>
        <p>Count: {count}</p>
        <button onClick={() => setCount(count+1)}>Add</button>
        
        </>
    )
}
export default CounterEffect;