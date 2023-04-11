import { useEffect } from "react";
import { useState } from "react";


function Compteur () {
    const [count, setCount] = useState(0)

    const handleClick = (e) => {
        e.preventDefault()
        setCount(count+1)
    }
    useEffect(() => {
        document.title = 'compteur' + count
    }, [])

    return (
        <div>
            <button onClick={handleClick}>c</button>
            <p>{count}</p>
        </div>
    )
}

export default Compteur;