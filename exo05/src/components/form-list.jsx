import { useId, useState } from "react";


const FormList = ({onValidation}) => {
    const id = useId()
    const [nom, setNom] = useState('')
    const [description, setDescription] = useState('')
    const [prio, setPrio] = useState('tranquille')
    const handleSubmit = (e) => {
        e.preventDefault();
        onValidation({nom, description, prio})
    }

    return (
        <form onSubmit={handleSubmit}>
            <label htmlFor={id+"nom"}>Tâche : </label>
            <input type="text" id={id+"nom"} value={nom} onChange={e => setNom(e.target.value)}/>
            
            <label htmlFor={id+"desc"}>Description : </label>
            <input type="text" id={id+"desc"} value={description} onChange= {e => setDescription(e.target.value)} />

            <select value={prio} onChange={e => setPrio(e.target.value)} id={id+"prio"}>
                <option value="tranquille">Tranquille</option>
                <option value="normal">Normal</option>
                <option value="urgent">Urgent</option>
            </select>
            <button type="submit">Ajouter la tâche</button>
        </form>
    )
}

export default FormList;