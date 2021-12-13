import React from 'react'
import style from "./Voiture.module.css"

export default function Voiture() {
    return (
        <div style={style.text}>
            <h1>MacLaren</h1>
            <p style={{color: 'yellow'}}>Peut aller jusqu&#39;à 300 km/h</p>
        </div>
    )
}
