/* eslint-disable react/prop-types */
import React, { useContext } from 'react'
import { UserContext } from '../Exercice11/Context/UserContext'

export default function Hobbie(props) {
    const {user, setUser} = useContext(UserContext);
    return (
        <ul>
            {
                user.listhobbies.map((element)=>{
                    return (
                        <li key={element.id}>
                            {element.hobby}
                        </li>
                    )
                })
            }
        </ul>
    )
}
