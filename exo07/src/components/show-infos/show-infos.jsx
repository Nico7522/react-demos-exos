import style from "./show-infos.module.css";

export default function ShowInfos({ data }) {
  return (
    <div className={style["main"]}>
      {/* <h2>City : {data.cityName}</h2>
      <p>Actual temperature : {data.temp}C°</p>
      <p>feeling : {data.feeling}C°</p>
      <p>Look like : {data.weather[0].description}</p> */}
      <SetLang l={data.lang} data={data} />
      <img
        src={
          "https://openweathermap.org/img/wn/" + data.weather[0].icon + ".png"
        }
        alt=""
      />
    </div>
  );
}

function SetLang({l, data}) {
  if (l === "fr") {
    return (
      <>
        <h2>Ville : {data.cityName} </h2>
        <p>Température actuelle : {data.temp}C° </p>
        <p>Ressentie : {data.feeling}C°</p>
        <p>Ressemble : {data.weather[0].description} </p>
      </>
    );
  } else {
    return (
        <>
        <h2>City : {data.cityName} </h2>
        <p>Actual temperature : {data.temp}C° </p>
        <p>Feeling : {data.feeling}C°</p>
        <p>Look like : {data.weather[0].description} </p>
      </>
    );
  }
}
