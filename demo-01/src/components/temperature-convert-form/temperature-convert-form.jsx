import { useState } from "react";
import { useId } from "react";
import style from './temp.module.css'
const TemperatureConvertForm = () => {
    const id = useId();

    const [tempSource, setTempSource] = useState('')
    const [choice, setChoicee] = useState('C')
    const [tempResult, setTempResult] = useState('')

    const handleConvertSubmit = (e) => {
        e.preventDefault();
        let result;
        if (choice === 'C') {
            result = ((tempSource*1.8)+32).toFixed(2)
        } else if (choice === 'F') {
            result = ((tempSource-32) / 1.8).toFixed(2)
        } else {
            result = "Conversion non supportée"
        }
        setTempResult(result)
        
    }

  return <form className={style['temp-convert']} onSubmit={handleConvertSubmit}>
    <div>
    <label htmlFor={id+"temp"}>Température</label>
    <input type="text" id={id+"temp"} value={tempSource} onChange={e => setTempSource(e.target.value)}  />
    </div>
    <div>
        <label htmlFor={id+"convert"}>Type de conversion</label>
        <select  id={id+"convert"} value={choice} onChange={e => setChoicee(e.target.value)} >
            <option value="C">Celcius vers Fahrenheit</option>
            <option value="F">Fahrenheit vers Celcius</option>
        </select>
    </div>
    <div>
        <button type="submit">Convertir</button>
        <input type="text" value={tempResult} readOnly />
    </div>
  </form>;
};

export default TemperatureConvertForm;
