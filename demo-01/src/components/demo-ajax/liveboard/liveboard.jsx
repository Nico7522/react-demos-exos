import { useEffect, useState } from "react";
import axios from "axios";
import ResponseScreen from "./response-screen/response-screen";

const URL_IRAIL =
  "https://api.irail.be/liveboard/?station=__station__&format=json";
export default function LiveBoard({ station }) {
  // Trois état dans mon composants
  // Loading => En attente du résultat
  // Error => Erreur rencontrée
  // Data => Quand tout va bien
  const [data, setData] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);
  const [timeRequest, setTimeRequest] = useState(new Date());

  useEffect(() => {
    const url = URL_IRAIL.replace("__station__", station);
    setIsLoading(true);
    setError(null);
    setData(null);
    axios
      .get(url)
      .then(({ data }) => {
        console.log(data);
        setData({
            station: data.station,
            departures: data.departures.departure.map((d) => ({
                id: d.vehicle,
                destination: d.station,
                delay: d.delay
            }))
        });
      })
      .catch((error) => {
        setError("Station not found");
      })
      .finally(() => {
        setIsLoading(false);
      });
  }, [station, timeRequest]);

  return (
    <div>
      {isLoading ? (
        <LoadingScreen />
      ) : error ? (
        <p>{error}</p>
      ) : 
        data && 
          <>
            <button onClick={() => setTimeRequest(new Date())}>Reload</button>
            <ResponseScreen station={data.station} departures={data.departures}/>
          </>
        
      }
    </div>
  );
}

const LoadingScreen = () => <p>Chargement en cours</p>
