import React, { useContext } from 'react'
import { UserContext } from '../Exercice11/Context/UserContext'

export default function FirstName(props) {
    const {user, setUser} = useContext(UserContext);
    return (
        <>
            {user.firstname}
        </>
    )
}
