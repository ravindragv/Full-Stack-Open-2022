import { useState } from 'react'

const App = () => {
  const [persons, setPersons] = useState([
    { name: 'Arto Hellas' }
  ]) 
  const [newName, setNewName] = useState('')

  const addPerson = (event) => {
    event.preventDefault()

    // Check if the person exists in the phonebook, if no add person
    if (persons.some((element) => {return element.name === newName})) {
      window.alert(`${newName} already exists in the Phonebook`)
    } else {
      const personArrayElem = {
        name: newName,
      }
      setPersons(persons.concat(personArrayElem))
    }
  }

  const handleNameAddition = (event) => {
    setNewName(event.target.value)
  }

  return (
    <div>
      <h2>Phonebook</h2>
      <form onSubmit={addPerson}>
        <div>
          name: <input 
                  value={newName}
                  onChange={handleNameAddition}
                />
        </div>
        <div>
          <button type="submit">add</button>
        </div>
      </form>
      <h2>Numbers</h2>
      <div>{persons.map((person) => {return <b key={person.name}>{person.name}<br/></b>})}</div>
    </div>
  )
}

export default App