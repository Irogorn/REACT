import React from 'react'
import Events from './Events'

export default function Routine() {
    return (
        <div>
            <Evenst text='Manger' click={()=>{alert("Faut manger !")}}/>
            <Events text='Dormir' click={()=>{alert("Faut dormir !")}}/>
            <Events text='Etudier' click={()=>{alert("Faut étudier !")}}/>
        </div>
    )
}
