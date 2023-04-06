import { useState } from "react"
import { useId } from "react"
import style from './calc-form.module.css'


const CalculForm = () => {
    const id = useId()
    const [nb, setNb] = useState('')
    const [nb2, setNb2] = useState('')
    const [calc, setCalc] = useState('+')
    const [resultat, setResultat] = useState('')
    const [dark, setDark] = useState(false)

    const handleResult = (e) => {
        e.preventDefault();
        if (nb === "" || nb2 === "") {
            let error = "Veuillez entrez 2 nombres correctes"
            return setResultat(error)
        } 
        if (nb2 === "0" && calc === "/") {
            let error = "Division par 0 impossible"
            return setResultat(error)
        }
        let nbTemp = parseFloat(nb)
        let nbTemp2 = parseFloat(nb2)
        let resultTotal;
        switch (calc) {
            case "+":
                resultTotal = nbTemp + nbTemp2
                break;
            case "-":
                resultTotal = nbTemp - nbTemp2
                break;
            case "x":
                resultTotal = nbTemp * nbTemp2
                break;
            case "/":
                resultTotal = nbTemp / nbTemp2
                break;
            case "¹":
                resultTotal = Math.pow(nbTemp, nbTemp2)
                break;
            default:
                setResultat('Erreur')
                break;
        }
        if (resultTotal.toString().includes('.')) {
            setResultat(resultTotal.toFixed(2))
        } else {
            setResultat(resultTotal)
        }
    }

    return (
        <div >
        <form className={style['form'] + " " + (dark ? style['dark'] : style['white'])} onSubmit={handleResult}>
            <div >
                <label htmlFor={id+"nombre"}>Nombre : </label>
                <input value={nb} onChange={e => isNaN(e.target.value) ? "" : setNb(e.target.value)} type="text" id={id+"nombre"} />
            </div>
            <div>
                <label htmlFor={id+"nombre2"}>Nombre 2 : </label>
                <input value={nb2} onChange={e => isNaN(e.target.value) ? "" : setNb2(e.target.value)}  type="text" id={id+"nombre2"} />
            </div>
            <div>
                <select value={calc} onChange={e => setCalc(e.target.value)}  id={id+"calc"}>
                    <option value="+">+</option>
                    <option value="-">-</option>
                    <option value="x">X</option>
                    <option value="/">/</option>
                    <option value="¹">¹</option>
                </select>
                <div className={style['result']}>
                    <label htmlFor={id+"reponse"}>Résultat : </label>
                    <input value={isNaN(resultat) ? " " : resultat} onChange={e => setResultat((e.target.value))}  type="text" htmlFor={id+"reponse"} readOnly />
                    <span style={{"color" : "red"}}>{isNaN(resultat) ? resultat : "" }</span>
                </div>
            </div>
            <button type="submit">Calculer</button>

        </form>
        
        <label className={style['switch']}>
        <input type="checkbox" value={dark} onChange={e => setDark(e.target.checked)} className={style['chk']} />
        <span className={style['slider']}></span>
        {console.log(dark)}
      </label>
      </div>
    )
}

export default CalculForm