import React from 'react'
import InputField from './InputField'

const PersonForm = ({personFormObj}) => {
    return (
        <div>
            <form onSubmit={personFormObj.add}>
                <InputField dispText={personFormObj.nameDispText} 
                            stateVar={personFormObj.name}
                            changeHdl={personFormObj.nameChangeHdl}/>
                <InputField dispText={personFormObj.numDispText} 
                            stateVar={personFormObj.number}
                            changeHdl={personFormObj.numChangeHdl}/>
                <div>
                    <button type="submit">Add</button>
                </div>
            </form>
        </div>
    )
}

export default PersonForm