import axios from "axios";
const API_KEY = "72b1830e6bd1df9d301781d068217f37"

const WEATHER_URL = `https://api.openweathermap.org/data/2.5/weather`;
const WEATHER_URL_FORECAST = `https://api.openweathermap.org/data/2.5/forecast`;
export function fetchApiWeather(city, language) {
  return axios
    .get(WEATHER_URL, {
      params: {
        q: city,
        lang: language,
        appid: API_KEY,
        units: "metric",
      },
    })
    .then(({ data }) => ({
      lang: language,
      id: data.id,
      cityName: data.name,
      temp: data.main.temp,
      feeling: data.main.feels_like,
      weather: data.weather,
    }));
}

export function fetchApiWeatherForecast(city) {
  return axios
    .get(WEATHER_URL_FORECAST, {
      params: {
        q: city,
        appid: API_KEY,
        units: "metric",
      },
    })
    .then(({ data }) => {
      return {
        city: data.city.name,
        forecast: data.list.map((t) => ({
          date: t.dt_txt,
          temp: t.main.temp,
          weather: t.weather[0].description,
          img: t.weather[0].icon,
        })),
      };
    }).then(r => {
      return r
    })
}
