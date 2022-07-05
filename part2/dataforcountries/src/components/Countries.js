import React, { useState } from 'react'
import Country from "./Country";

const Countries = ({countries}) => {
    // We know that maximum of 10 countries will be displayed so create an
    // array of 10 elements
    const visibilityInitArray = new Array(10).fill(false)
    const [visibility, setVisibility] = useState(visibilityInitArray)

    const handleShow = (i) => {
        const visibilityRef = [...visibility]
        visibilityRef[i] = !visibilityRef[i]
        setVisibility(visibilityRef)
    }

    if (countries.length === 1) {
        return (<Country country={countries[0]} showWeather={true}/>)
    } else if (countries.length > 10) {
        return (<div>Too many matches, specify another filter</div>)
    }

    return(
        <div>
            {countries.map((element, i) =>
                <div key={element.cca3}>
                    {element.name.common}
                    <button onClick={() => handleShow(i)}>{visibility[i]? 'Hide' : 'Show'}</button>
                    {visibility[i] && <Country country={countries[i]} showWeather={false}/>}
                </div>
            )}
        </div>
    )
}

export default Countries