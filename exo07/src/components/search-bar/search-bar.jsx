import { useState } from "react"

export default function SearchBar ({cityName}) {
    const [city, setCity] = useState('')
    const sendCity = (e) => {
        e.preventDefault()
        console.log(city);
    }

    return <form onSubmit={sendCity}>
        <label htmlFor="city">City name : </label>
        <input type="text" value={city} onChange={(e) => setCity(e.target.value)}  />
        <button>Search</button>
    </form>
}