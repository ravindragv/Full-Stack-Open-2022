import React from 'react'
import Person from './Person'

const PersonList = ({personList}) => {
    return (
        <div>
            { personList.map((person) => {
                    return <Person key={person.id} person={person}/>                   
                })
            }
        </div>
    )
}

export default PersonList