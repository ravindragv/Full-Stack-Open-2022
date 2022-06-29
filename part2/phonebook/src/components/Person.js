import React from 'react'

const Person = ({personList}) => {
    return (
        <div>
            { personList.map((person) => {
                    return <b key={person.name}>
                        {person.name} {person.number}<br/>
                        </b>
                })
            }
        </div>
    )
}

export default Person