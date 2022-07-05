import axios from 'axios'
import React, { useState, useEffect } from 'react'

const Country = ({country, showWeather}) => {
    const [weatherInfo, setWeatherInfo] = useState(null)

    useEffect(() => {
        const api_key = process.env.REACT_APP_API_KEY
        axios.get(`https://api.openweathermap.org/data/2.5/weather?lat=${country.capitalInfo.latlng[0]}&lon=${country.capitalInfo.latlng[1]}&appid=${api_key}&units=${'metric'}`)
        .then(response => {
            console.log(response.data.weather.icon)
            setWeatherInfo(response.data)
        })
    }, [])

    const showCurrentWeather = () => {
        return(
            <div>
                <h2>Weather in {country.name.common}</h2>
                <p>Temperature {weatherInfo?.main.temp} C</p>
                <img src={`http://openweathermap.org/img/wn/${weatherInfo?.weather[0].icon}@2x.png`} alt={'Current Weather Icon'}/>
                <p>Wind {weatherInfo?.wind.speed} Kmph</p>
            </div>
        )
    }

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

            {showWeather && showCurrentWeather()}
        </div>
    )
}

export default Country