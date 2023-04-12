import { useState } from "react";
import SearchBar from "../../components/search-bar/search-bar";
import ShowInfoForecast from "../../components/show-infos/show-infos-forecast";
import WeatherLiveBoard from "../../components/weather-liveboard/weather-liveboard";

export default function Weather () {
    const [city, setCity] = useState(null)
    const [lang, setLang] = useState('fr')
    const handleCity =  (city, lang) => {
        setCity(city)
        setLang(lang)
    }
    return <>
    <h1>WEATHER</h1>
    {city && <WeatherLiveBoard city={city} lang={lang} />}
    <SearchBar sendSearch={handleCity} />
    
    </>
    
}