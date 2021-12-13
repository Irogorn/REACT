import React from 'react'

const score = 505;
const nom = 'Paul';
const prenom = 'Henri';
const age = 25;
//const permisDeConduire = true;
//{score > 500 ? <h1>Gagnant: {score}</h1>: <h1>Perdant: {score}</h1>}
export default function Player() {
    return (
        <>
            <h1>{nom} {prenom} agé de {age}</h1> 
            {score > 500 && <h1>Gagnant: {score}</h1> || <h1>Perdant: {score}</h1>}
        </>
    )   
}
