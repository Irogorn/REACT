import React from 'react'
import styles from './Card.module.css'

export default function Card(props) {
    return (
        <>
                {props.affichage === true && <div className={styles.container}><h1>{props.title}</h1>{props.children}</div>}
        </>
    )
}
