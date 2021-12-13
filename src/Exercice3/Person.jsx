import React from 'react'
import FullName from './FullName'
import Hobbie from './Hobbie'

export default function Person() {
    return (
        <div>
            <h2>Je suis une personne.</h2>
            <FullName/>
            <Hobbie/>
        </div>
    )
}
