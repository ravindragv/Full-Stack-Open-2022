import { useState, useEffect } from 'react'
import PersonList from './components/PersonList'
import InputField from './components/InputField'
import PersonForm from './components/PersonForm'
import phoneBookService from './services/phoneBookService'

const App = () => {
  const [persons, setPersons] = useState([])
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

      phoneBookService
      .create(personArrayElem)
      .then(person => {
        const newPersonList = persons.concat(person)
        setPersons(newPersonList)
        setPersonDisplay(newPersonList)
      })

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

  const setPersonLists = () => {
    phoneBookService
    .getAll()
    .then(personList => {
      setPersons(personList)
      setPersonDisplay(personList)
    })
  }

  useEffect(() => {
    setPersonLists()
  }, [])

  const handlePersonDelete = (personName) => {
    if (window.confirm(`Do you really want to delete ${personName}`)) {
      phoneBookService
      .deletePerson(personName)
      .then(response => {
        setPersonLists()
      })
    }
  }

  return (
    <div>
      <h2>Phonebook</h2>
      <InputField dispText={'Filter shown with'} stateVar={filterName} changeHdl={handleFilterNameAddition}/>
      <h3>Add a new</h3>
      <PersonForm personFormObj={personFormObj}/>
      <h3>Numbers</h3>
      <PersonList personList={personDisplay} deleteHdl={handlePersonDelete}/>
    </div>
  )
}

export default App