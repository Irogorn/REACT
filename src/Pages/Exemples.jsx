import { UserContext } from '../Exercice11/Context/UserContext'
import User from '../Exercice3/User';
import { useState } from 'react';
import React from 'react'

export default function Exemples() {
    const [user, setUser] = useState({firstname: 'Tesla', lastname: 'Nico', listhobbies: [{id: 0, hobby:'info'},{id:1, hobby:'dessin'},{id:3, hobby:'marche'}]});
    return (
        <UserContext.Provider value={{user,setUser}}>
            <div className='App'>
                <User/>
            </div>
        </UserContext.Provider>
    )
}