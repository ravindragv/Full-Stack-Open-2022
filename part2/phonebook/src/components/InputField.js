import React from 'react'

const InputField = ({dispText, stateVar, changeHdl}) => {
    return (
        <div>
            {dispText} <input
                        value={stateVar}
                        onChange={changeHdl}/>
        </div>
    )
}

export default InputField