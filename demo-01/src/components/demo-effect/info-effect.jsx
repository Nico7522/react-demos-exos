import { useEffect } from "react"


const InfoEffect = () => {
    useEffect(() => {
        console.log("coucou");
        return () => {
            console.log("BYE BYE");
        }
    }, [])

    return <h2>Info Effect Works</h2>
}

export default InfoEffect