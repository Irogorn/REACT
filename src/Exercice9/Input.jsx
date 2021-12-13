import React from 'react'
import { useState } from 'react'
import Events from '../Exercice6/Events';
import Card from '../Exercice8/Card'

export default function Input() {
    const [mot,setMot] = useState("");
    const [motaff,setMotAff] = useState("");
    const [err,setErr] = useState("");
    function handleChange(e){
        setMot(e.target.value);
    };
    function display(){
        setErr('');
        if(mot === ''){
            setErr('Vous devez rentrer du text');
            return;
        }
        setMotAff(mot);
        setMot('');
    };
    return (
        <div>
            <Card title="Input" affichage={true}>
                <h2>{motaff}</h2>
                <input placeholder='Entrez un mot' onChange={handleChange} value={mot}></input>
                <Events text='Save' click={display}/>
                <p style={{color: "red", fontWeight:"bold"}}>{err}</p>
            </Card>
        </div>
    )
}
