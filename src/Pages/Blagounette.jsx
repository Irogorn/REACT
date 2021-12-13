import React from 'react'
import axios from "axios";
import { useEffect, useState } from "react";
import Card from '../Exercice8/Card';
import Events from '../Exercice6/Events';

export default function Blagounette() {
    const [joke, setJoke] = useState([]);
    const [next, setNext] = useState(0);
    const [display,setDisplay] = useState(false);

    useEffect(() => {
        axios
            .get("https://www.blagues-api.fr/api/random", {
                headers: {
                    'Authorization': `Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyX2lkIjoiODU0MDExNjY5NzY3OTEzNDcyIiwibGltaXQiOjEwMCwia2V5IjoiM0w2NVZzWXNaTUl0NzBUemZONURpeENBRmZlVGdiQ3NqWGFjNWp2OFBwYXRhN2sxZ1giLCJjcmVhdGVkX2F0IjoiMjAyMS0xMS0yNlQxNToyNDozMCswMDowMCIsImlhdCI6MTYzNzk0MDI3MH0.5huyoL08gKaLQAKz-s25ZOwtHnirPf7XBcUgFuY9ob0`
                },
            })
            .then((res) => {
                console.log(res);
                setJoke(res.data);
            });

            return (
                setDisplay(false)
            )

    }, [next]);

    function reveal(){
        setDisplay(true);
    }

    function nexto(){
        setNext(next+1);
    }

    return (
        <div>
            <Card title={joke.type} affichage={true}>
                <p>{joke.joke}</p>
                {(display)&&<p>{joke.answer}</p>}
            </Card>
            <Events text='Answer' click={reveal}/>
            <Events text='Next' click={nexto}/> 
        </div>
    )
}
