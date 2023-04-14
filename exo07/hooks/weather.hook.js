import { useEffect, useState } from "react";
import { fetchApiWeather, fetchApiWeatherForecast } from "../api/api";

export const useFetchWeather = (city, lang) => {
    
    const [dataCity, setDataCity] = useState(null);
    const [dataCityForecast, setDataCityForecast] = useState(null);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);
    const [archive, setArchive] = useState([]);

    useEffect(() => {
        Promise.all([fetchApiWeather(city, lang), fetchApiWeatherForecast(city)]).then(([data1, data2]) => {
            console.log('data 1', data1);
            console.log('data 2', data2);
        })

    }, [])
    
    return [dataCity, dataCityForecast]
}