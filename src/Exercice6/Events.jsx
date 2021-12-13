import React from 'react'
// import {Button} from 'react-bootstrap';

export default function Events(props) {

    return (
        <>
            <button onClick={props.click} style={{backgroundColor: "lightgreen", padding:"10px", border:"none", borderRadius:"10px", margin:"10px", minWidth:"150px"}}> {props.text}</button>
            {/* <Button onClick={props.click} variant="outline-primary">{props.text}</Button> */}
        </>
    )
}
