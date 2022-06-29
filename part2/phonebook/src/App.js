import { useState } from 'react'
import PersonList from './components/PersonList'
import InputField from './components/InputField'
import PersonForm from './components/PersonForm'

const App = () => {
  const [persons, setPersons] = useState([
    { name: 'Arto Hellas', number: '040-123456', id: 1 },
    { name: 'Ada Lovelace', number: '39-44-5323523', id: 2 },
    { name: 'Dan Abramov', number: '12-43-234345', id: 3 },
    { name: 'Mary Poppendieck', number: '39-23-6423122', id: 4 }
  ])
  const [newName, setNewName] = useState('')
  const [newNumber, setNewNumber] = useState('')
  const [personDisplay, setPersonDisplay] = useState(persons)
  const [filterName, setFilterName] = useState('')

  const addPerson = (event) => {
    event.preventDefault()

    // Check if the person exists in the phonebook, if no add person
    if (persons.some((element) => {return element.name === newName})) {
      window.alert(`${newName} already exists in the Phonebook`)
    } else {
      const personArrayElem = {
        name: newName,
        number: newNumber,
        id: persons.length + 1
      }
      const newPersonList = persons.concat(personArrayElem)
      setPersons(newPersonList)
      setPersonDisplay(newPersonList)

      setNewName('')
      setNewNumber('')
      setFilterName('')
    }
  }

  const handleNameAddition = (event) => {
    setNewName(event.target.value)
  }

  const handleNumberAddition = (event) => {
    setNewNumber(event.target.value)
  }

  const handleFilterNameAddition = (event) => {
    setFilterName(event.target.value)
    if (event.target.value === '') {
      setPersonDisplay(persons)
    } else {
      setPersonDisplay(persons.filter((element) => {
          return element.name.toLowerCase().includes(
            event.target.value.toLowerCase())
        }))
    }
  }

  const personFormObj = {
    add: addPerson,
    nameDispText: 'Name: ',
    name: newName,
    nameChangeHdl: handleNameAddition,
    numDispText: 'Number: ',
    number: newNumber,
    numChangeHdl: handleNumberAddition
  }

  return (
    <div>
      <h2>Phonebook</h2>
      <InputField dispText={'Filter shown with'} stateVar={filterName} changeHdl={handleFilterNameAddition}/>
      <h3>Add a new</h3>
      <PersonForm personFormObj={personFormObj}/>
      <h3>Numbers</h3>
      <PersonList personList={personDisplay}/>
    </div>
  )
}

export default App