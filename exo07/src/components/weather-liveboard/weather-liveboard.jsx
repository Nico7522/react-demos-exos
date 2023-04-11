import axios from 'axios'
import { useEffect } from 'react'

const API_KEY = 'b4aa40379346ecf2bb8db2359d18a890'

const WEATHER_URL = `http://api.openweathermap.org/geo/1.0/direct?q=La-Louviere&limit=1&appid=${API_KEY}`

export default function WeatherLiveBoard ({cityName}) {

    useEffect(() => {
        console.log(WEATHER_URL);

        axios.get(WEATHER_URL)
            .then(({data}) => {
                console.log(data);
            })

    })

}