import React from 'react'
import { useState } from 'react'
import Events from '../Exercice6/Events';
import Card from '../Exercice8/Card'

export default function Taches() {
    const [tasks, setTasks] = useState([]);
    const [addedtask,setAddedTask] = useState('');
    const [err,setErr] = useState('');

    function handleTask(evt){
        setAddedTask(evt.target.value);
    }

    function addTask(){
        setErr('');
        if(addedtask === ''){
            setErr("Put your text in this input just above");
            return;
        }
        setTasks([...tasks,{id:tasks.length, task:addedtask}]);
        setAddedTask('');
    }

    return (
        <Card title="Liste de tâches" affichage={true}>
            <ol>
                {
                    tasks.map((t)=>{
                        return (
                            <li key={t.id}>
                                {t.task}
                            </li>
                        )
                    })
                }
            </ol>
            <input placeholder='Ajouter une tâche' value={addedtask} onChange={handleTask}></input>
            <Events text='Add' click={addTask}/>
            <p style={{color: "red", fontWeight:'bold'}}>{err}</p>
        </Card>
    )
}
