import React from 'react'
import { useState } from 'react'
import Events from '../Exercice6/Events';
import Card from '../Exercice8/Card'

export default function Calculator() {
    const [resultat,setResultat] = useState('');
    const [operande1,setOperande1] = useState('');
    const [operande2,setOperande2] = useState('');
    const [op1,setOp1] = useState('');
    const [op2,setOp2] = useState('');
    const [err,setErr] = useState('');

    function action1(evt){
        setOperande1(evt.target.value);
        setOp1(evt.target.value);
    }

    function action2(evt){
        setOperande2(evt.target.value);
        setOp2(evt.target.value);
    }

    function add(){
        setErr('');
        if(isNaN(operande1) || isNaN(operande2)){
            setErr('A operand must not contain letters !');
            return;
        }
        if(operande1 !== '' && operande2 !== ''){
            setResultat(parseFloat(operande1) + parseFloat(operande2));
            setOperande1('');
            setOperande2('');
            setOp1('');
            setOp2('');
        }
        else{
            setErr('Une des opérandes n\'est pas renseigné');
        }
    }

    function sub(){
        setErr('');
        if(isNaN(operande1) || isNaN(operande2)){
            setErr('A operand must not contain letters !');
            return;
        }
        if(operande1 !== '' && operande2 !== ''){
            setResultat(parseFloat(operande1) - parseFloat(operande2));
            setOperande1('');
            setOperande2('');
            setOp1('');
            setOp2('');
        }
        else{
            setErr('Une des opérandes n\'est pas renseigné');
        }
    }

    function mult(){
        setErr('');
        if(isNaN(operande1) || isNaN(operande2)){
            setErr('A operand must not contain letters !');
            return;
        }
        if(operande1 !== '' && operande2 !== ''){
            setResultat(parseFloat(operande1) * parseFloat(operande2));
            setOperande1('');
            setOperande2('');
            setOp1('');
            setOp2('');
        }
        else{
            setErr('Une des opérandes n\'est pas renseigné');
        }
    }

    function div(){
        setErr('');
        if(isNaN(operande1) || isNaN(operande2)){
            setErr('A operand must not contain letters !');
            return;
        }
        if(operande1 !== '' && operande2 !== ''){
            if(parseFloat(operande2) !== 0){
                setResultat(parseFloat(operande1) / parseFloat(operande2));
                setOperande1('');
            setOperande2('');
            setOp1('');
            setOp2('');
            }
            else{
                setErr('Warning division by 0 !');
            }
        }
        else{
            setErr('Une des opérandes n\'est pas renseigné');
        }
    }

    function reset(){
        setOp1('');
        setOperande1('');
        setOp2('');
        setOperande2('')
        setResultat('');
        setErr('');
    }

    return (
        <Card title='Calculate' affichage={true}>
            <h5>{resultat}</h5>
            <input placeholder='Opérande 1' onChange={action1} value={op1} style={{margin: "5px"}}></input>
            <input placeholder='Opérande 2' onChange={action2} value={op2} style={{margin: "5px"}}></input>
            <br/>
            <Events text='+' click={add}/>
            <Events text='-' click={sub}/>
            <Events text='*' click={mult}/>
            <Events text='/' click={div}/>
            <Events text='C' click={reset}/>
            <p style={{color: "red", fontWeight:'bold'}}>{err}</p>
        </Card>
    )
}
