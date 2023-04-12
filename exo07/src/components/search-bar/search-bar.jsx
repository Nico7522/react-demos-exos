import { useState } from "react"

export default function SearchBar ({ sendSearch }) {
    const [city, setCity] = useState('')
    const [lang, setLang] = useState('fr')
    const sendCity = (e) => {
        e.preventDefault()
        sendSearch(city.toLocaleLowerCase(), lang)  
        setCity('')
        setLang('fr')
    }

    return <form onSubmit={sendCity}>
        <label htmlFor="city">City name : </label>
        <input type="text" value={city} onChange={(e) => setCity(e.target.value)}  />

        <label htmlFor="lang">Language :  </label>
        <select value={lang} onChange={(e) => setLang(e.target.value)} >
            <option value="fr">FR</option>
            <option value="en">ENG</option>
            <option value="it">ITA</option>
            <option value="es">ESP</option>
        </select>
        <button>Search</button>
    </form>
}