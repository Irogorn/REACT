/* eslint-disable react/prop-types */
import React,{ useContext } from 'react'
import { UserContext } from '../Exercice11/Context/UserContext'

export default function LastName(props) {
    const {user, setUser} = useContext(UserContext);
    return (
        <>
            {user.lastname}
        </>
    )
}
