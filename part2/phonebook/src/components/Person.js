import React from 'react'

const Person = ({person}) => {
    return (
        <div>
            <b>{person.name} {person.number}</b>
        </div>
    )
}

export default Person