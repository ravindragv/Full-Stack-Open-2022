import React from 'react'

const Person = ({person, deleteHdl}) => {
    return (
        <div>
            <b>{person.name} {person.number}</b>
            &nbsp;<button onClick={() => deleteHdl(person.name)}>Delete</button>
        </div>
    )
}

export default Person