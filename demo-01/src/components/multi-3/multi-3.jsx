import React, { useState } from "react";
import { useCallback } from "react";
const Multi3 = () => {
    const [count, setCount] = useState(1)
    const handleUp = useCallback(() => {
        if(count <= 100) {
            setCount(count => count+1)
        }
    });

    return (
        <div>
            <h3>{count <= 0 ? 1 : count} x 3 = {count*3}</h3>
            <div>
                <button onClick={handleUp}>Next</button>
                <button onClick={(e) => count > 0 && setCount(count => count - 1) }>Previous</button>
            </div>
        </div>
    )
}

export default Multi3