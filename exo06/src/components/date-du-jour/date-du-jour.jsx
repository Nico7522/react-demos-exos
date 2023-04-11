import { useEffect } from "react";
import { useState } from "react";

function DateDuJour () {

    useEffect(() => {
        return () => date;
    })

    const [date, setDate] = useState(new Date().toLocaleDateString("fr", {
        day: "numeric",
        month: "long",
        year: "numeric",
      }))
    return (
        <p>Date du jour : {date}</p>
    )
}

export default DateDuJour;