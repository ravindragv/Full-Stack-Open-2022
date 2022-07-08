import React from 'react'
import Person from './Person'

const PersonList = ({personList, deleteHdl}) => {
    return (
        <div>
            { personList.map((person) => {
                    return <Person key={person.name} person={person} deleteHdl={deleteHdl}/>
                })
            }
        </div>
    )
}

export default PersonList