import React from 'react'

const Country = ({country}) => {
    return (
        <div>
            <h1>{country.name.common}</h1>
            Capital(s) - <ul>{country.capital.map((city, i)=> <li key={i}>{city}</li>)}</ul>
            Area - {country.area}
            <h2>Languages:</h2>
            <ul>
                {Object.keys(country.languages).map((key) => <li key={key}>{country.languages[key]}</li>)}
            </ul>
            <img src={country.flags.png} alt={country.name}/>
        </div>
    )
}

export default Country