import React from 'react'
import { useState } from 'react'
import Card from '../Exercice8/Card';
import Events from "../Exercice6/Events"


export default function Compteur() {
    const [result, setResult] = useState(0);
    const [answer, setAnswer] =  useState(false);
    function add(){
        console.log("clicked");
        setResult(result + 1);
    }
    function sub(){
        console.log("clicked");
        setResult(result - 1);
    }
    function question(){
        setAnswer(!answer);
    }
    return (
        <>
            <Card title='Compteur' affichage={answer}>
                <h1>{result}</h1>
                <Events text="-1" click={sub}/>
                <Events text="+1" click={add}/>
                <br/>
            </Card> 
            <Events text={answer ? 'Hide' : 'Display'} click={question}/>
            </>
    )
}
