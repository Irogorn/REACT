import React from 'react'
import Chambre from './Chambre'
import Cuisine from './Cuisine'
import Salon from './Salon'

export default function Maison() {
    return (
        <div>
            <h1>Bienvenue chez les chtis</h1>
            <ul>
                <Chambre/>
                <Salon/>
                <Cuisine/>
            </ul>
        </div>
    )
}
