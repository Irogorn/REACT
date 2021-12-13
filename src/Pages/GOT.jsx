import axios from "axios";
import React, { useEffect, useState } from "react";
import Card from "../Exercice8/Card";

export default function GOT() {
    const [perso, setPerso] = useState([[]]);

    useEffect(() => {
        axios
            .get("https://thronesapi.com/api/v2/Characters", {
                headers: {
                    accept: "application/json",
                },
            })
            .then((res) => {
                console.log(res);
                setPerso(res.data);
            });
        /*  return (() =>{
            console.log('cleanup');
        } )*/
    }, []);

    return (
        <div>
            <h1>Liste des personnages de Game of Thrones</h1>
            <div>
                {perso.map((element) => {
                    return (
                        <Card title={element.family} affichage={true}>
                            <img
                                style={{ width: "250px" }}
                                src={element.imageUrl}
                                alt={element.firstname}
                            />
                            <p>{element.fullname}</p>
                        </Card>
                    );
                })}
            </div>
        </div>
    );
}
