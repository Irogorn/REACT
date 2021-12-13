import React from 'react'
import Events from '../Exercice6/Events';
import { useContext, useState} from 'react'
import { UserContext } from '../Exercice11/Context/UserContext'

export default function Taches() {
    const {user, setUser} = useContext(UserContext);
    const [sortie, setSortie] = useState('');

    function handleTask(evt){
        setSortie(evt.target.value);
    }

    function addTask(){
        setUser({...user, listhobbies:[...user.listhobbies,{id:user.length, hobby:sortie}]});
        setSortie('');
    }

    return (
        <>
            <ol>
                {
                    user.listhobbies.map((t)=>{
                        return (
                            <li key={t.id}>
                                {t.hobby}
                            </li>
                        )
                    })
                }
            </ol>
            <input placeholder='Ajouter une tâche' onChange={handleTask} value={sortie}></input>
            <Events text='Add' click={addTask}/>
        </>
    )
}
