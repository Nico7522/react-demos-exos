import style from './welcome.module.css'
import { useState } from "react";
import LuckyNumber from "../lucky-number/lucky-number";

const Welcome = ({name}) => {
    
    return (
        <div>
            <h2>Bienvenue<span className={style['name']}>{name}</span></h2>
            <LuckyNumber nb={53} />
            
        </div>
    );

};

export default Welcome