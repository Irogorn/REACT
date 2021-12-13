import React from 'react'

export default function Resultat(props) {
    return (
        <>
            {(props.affichage === true) && ((props.result > 10) ? <h5 style={{margin :"10px"}}>Gagnant: {props.result}</h5> : <h5 style={{margin :"10px"}}>Perdant: {props.result}</h5>)}
        </>
    )
}
