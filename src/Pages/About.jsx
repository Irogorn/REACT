import React from "react";
import { useNavigate, useLocation } from "react-router-dom";
import Events from "../Exercice6/Events";

export default function About() {
    const navigation = useNavigate();
    const location = useLocation();
    console.log(location);

    function goHome(){
        navigation('/',{state:{text: 'Hello world'}});
    }
    return (
        <div>
            <Events text="Go Home" click={goHome} />
            <p>Vous vous trouvez dans la page About</p>
        </div>
    );
}
