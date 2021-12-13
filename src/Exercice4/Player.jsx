import React from 'react'

const score = 505;

export default function Player() {
    return (
        score > 500 ? <h1>Gagnant: {score}</h1> : <h1>Perdant: {score}</h1>
    )
}
