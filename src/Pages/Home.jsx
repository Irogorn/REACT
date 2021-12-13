import React from 'react'
import { useLocation } from 'react-router-dom'
import { useNavigate } from "react-router-dom";
import Events from '../Exercice6/Events';

export default function Home() {
    const location = useLocation();
    const navigation = useNavigate();
    console.log(location);

    function goEx(){
        navigation('/exemples');
    }

    function goAbout(){
        navigation('/about',{state:{text: 'Je viens de la home page !'}});
    }

    return (
        <div>
            <h1>Page acceuil</h1>
            <Events text='Go Exemples' click={goEx}/>
            <Events text='Go About' click={goAbout}/>
        </div>
    )
}
