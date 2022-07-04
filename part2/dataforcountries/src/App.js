import axios from "axios";
import React, { useState, useEffect } from "react";
import InputField from './components/InputField'
import Countries from "./components/Countries";

const App = () => {
  const [filterName, setFilterName] = useState('')
  const [countryData, setCountryData] = useState()
  const [filteredCountry, setFilteredCountry] = useState([])

  const handleFilterNameChange = (event) => {
    setFilterName(event.target.value)
    setFilteredCountry(countryData
      .filter((element) => {
        return element.name.common
          .toLowerCase()
          .includes(event.target.value.toLowerCase())
      }))
  }

  useEffect(() => {
    axios
      .get('https://restcountries.com/v3.1/all')
      .then(response => {
        setCountryData(response.data)
      })
  }, [])

  return (
    <div>
      <InputField dispText="Find Countries" stateVar={filterName} changeHdl={handleFilterNameChange}/>
      <Countries countries={filteredCountry}/>
    </div>
  )
}

export default App;
