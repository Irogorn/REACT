
import React,{ useContext } from 'react'
import FullName from './FullName'
import Hobbie from './Hobbie'
import Card from '../Exercice8/Card'
import { UserContext } from '../Exercice11/Context/UserContext'
import Taches from './Taches'


export default function User() {
    const {user, setUser} = useContext(UserContext);
    
   
    function typeF(e){
        setUser({...user, firstname: e.target.value === '' ? user.firstname : e.target.value});
    }

    function typeL(e){
        setUser({...user, lasttname: e.target.value === '' ? user.lastname : e.target.value});
    }

    return (
        <Card title='User' affichage={true}>
            <FullName/>
            {/* <Hobbie/> */}
            <Taches/>
            <br/>
            <input placeholder='FirstName' onChange={typeF} style={{margin:'10px'}} /> 
            <input placeholder='LastName' onChange={typeL}  style={{margin:'10px'}}/> 
        </Card>
    )
}
