import React from 'react'
import Country from "./Country";

const Countries = ({countries}) => {
    if (countries.length === 1) {
        return (<Country country={countries[0]}/>)
    } else if (countries.length > 10) {
        return (<div>Too many matches, specify another filter</div>)
    }

    return(
        <div>
            {countries.map((element) => 
                <div key={element.cca3}>{element.name.common}</div>
            )}
        </div>
    )
}

export default Countries