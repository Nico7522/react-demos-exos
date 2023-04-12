import { useEffect, useState } from "react";
import ShowInfos from "../show-infos/show-infos";
import { fetchApiWeather, fetchApiWeatherForecast } from "../../../api/api";
import ShowInfoForecast from "../show-infos/show-infos-forecast";

export default function WeatherLiveBoard({ city, lang }) {
  const [dataCity, setDataCity] = useState(null);
  const [dataCityForecast, setDataCityForecast] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [archive, setArchive] = useState([]);

  useEffect(() => {
    setLoading(true);
    setError(null);
    setDataCity(null);
    fetchApiWeather(city, lang)
      .then((data) => {
        setDataCity(data);
        setArchive([...archive, data]);
        console.log(archive);
      })
      .catch((error) => {
        setError("Error");
      })
      .finally(() => {
        setLoading(false);
      });
  }, [city, lang]);

  useEffect(() => {
    fetchApiWeatherForecast(city).then((data) => {
        setDataCityForecast(data);
        console.log('datacity', dataCityForecast);

    });
  }, [city]);

  return (
    <>
      {loading
        ? "Loading..."
        : error !== null
        ? error
        : dataCity && <ShowInfos data={dataCity} />}
      {dataCity && <ShowInfoForecast data={dataCityForecast} />}
    </>
  );
}

// const url = WEATHER_URL.replace('__city__', city)
// setLoading(true)
// setError(null)
// setDataCity(null)
// axios.get(url)
//     .then(({data}) => {
//         // console.log(data);
//         setDataCity({
//             id: data.id,
//             cityName: data.name,
//             temp: data.main.temp,
//             feeling: data.main.feels_like,
//             weather: data.weather
//         })
//     })
