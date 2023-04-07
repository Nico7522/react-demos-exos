import { useState } from "react";
import CounterButtons from "../../src/components/counter/counter-buttons/counter-buttons"
import CounterDisplay from "../../src/components/counter/counter-display/counter-display"
import CounterReset from "../../src/components/counter/counter-reset/counter-reset";
const INITIAL_COUNT = 0;
const Counter = ( ) => {
    const [count, setCount] = useState(INITIAL_COUNT)
    const handleModifyCount = (step) => {
        setCount(c => c + step)
    }
    const handleReset = () => {
        setCount(0)
    }
    return (
        <>
        <h3>Counter</h3>
        <CounterDisplay countValue={count} />
        <CounterButtons step={1} onAction={handleModifyCount} />
        <CounterButtons step={5} onAction={handleModifyCount} />
        <CounterButtons step={10} onAction={handleModifyCount} />
        <CounterReset visible={count !== INITIAL_COUNT} onReset={handleReset} />
        </>
    )
}

export default Counter