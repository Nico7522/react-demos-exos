import { useId, useState } from "react"
import style from './listtodo.module.css'

const ListeTodo = ({listTache, onDelete, onChange, onCatch}) => {
    const id = useId();   
    const handleDelete = (t) => {
        onDelete(t)
    }
    const handleDone = (t) => {
        onChange(t)
    }
    const onCatchId = (t) => {
        onCatch(t)
    }
    return (
        <>
        {listTache.map( t => (
             <div key={t.id} className={t.isDone ? style['done'] : style['undone']} >
                <h3 >{t.nom}</h3>
                <p>{t.description}</p>
                <button className="btn btn-danger" value={t.isDone} onClick={() => onCatchId(t.id)}>Supprimer ?</button>
                <button className="btn btn-success" disabled={t.isDone} value={t.isDone} onClick={() => handleDone(t.id)}>Terminé ?</button>
                <span className={t.prio === 'urgent' ? style['urgent'] : ""}>{t.prio === 'urgent' ? "URGENT" : t.prio === 'normal' ? 'NORMAL' : t.prio === 'tranquille' ? 'J\'ai le temps' : ''}</span>
            </div> 
))}

        </>
    )
}

export default ListeTodo