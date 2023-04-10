import { useState } from 'react'
import style from './todoaff.module.css'

const ModalConfirm = ({sendDelete, modalOn, sendNoDelete}) => {


    const showM = () => {
        sendNoDelete()
    }
    const sureDelete = () => {
        sendDelete()
      
    }
 
    return (
        <div className={style["modal"] + " " + (modalOn === true ?  style["show"] : '' )}>
        Are you sure ?
        <div className={style['button']}>
          <button className="btn btn-outline-danger" onClick={sureDelete}>Yes</button>
          <button className="btn btn-outline-success" onClick={showM} >No</button>
        </div>
      </div>
    )
}
// onClick={() => setModal(false)}

export default ModalConfirm