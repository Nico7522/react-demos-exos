import style from "./show-infos.module.css";

export default function ShowInfoForecast( {data} ) {
  console.log('forecast', new Date(data.forecast[0].date).toLocaleTimeString());
  return (
     <div className={style["total"]}>
       <div className={style["one"]}>
        <h3>{new Date(data.forecast[0].date).toLocaleTimeString()}</h3>
    <img src={"https://openweathermap.org/img/wn/" + data.forecast[0].img + ".png"} alt="" />
      </div> 
      <div className={style["one"]}>
      <h3>{new Date(data.forecast[1].date).toLocaleTimeString()}</h3>
      <img src={"https://openweathermap.org/img/wn/" + data.forecast[1].img + ".png"} alt="" />
      </div>
      <div className={style["one"]}>
      <h3>{new Date(data.forecast[2].date).toLocaleTimeString()}</h3>
      <img src={"https://openweathermap.org/img/wn/" + data.forecast[2].img + ".png"} alt="" />
      </div>
      <div className={style["one"]}>
      <h3>{new Date(data.forecast[3].date).toLocaleTimeString()}</h3>
      <img src={"https://openweathermap.org/img/wn/" + data.forecast[3].img + ".png"} alt="" />
      </div>
      <div className={style["one"]}>
      <h3>{new Date(data.forecast[4].date).toLocaleTimeString()}</h3>
      <img src={"https://openweathermap.org/img/wn/" + data.forecast[4].img + ".png"} alt="" />
      </div>
    </div>
  );
}
