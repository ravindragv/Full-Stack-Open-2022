import { useState, useEffect } from 'react'
import PersonList from './components/PersonList'
import InputField from './components/InputField'
import PersonForm from './components/PersonForm'
import Notification from './components/Notification'
import phoneBookService from './services/phoneBookService'

const App = () => {
  const [persons, setPersons] = useState([])
  const [newName, setNewName] = useState('')
  const [newNumber, setNewNumber] = useState('')
  const [personDisplay, setPersonDisplay] = useState(persons)
  const [filterName, setFilterName] = useState('')
  const [message, setMessage] = useState(null)
  const [msgType, setMsgType] = useState('')

  const showMsg = (msg, msgType) => {
    setMsgType(msgType)
    setMessage(msg)
    setTimeout(() => {
      setMessage(null)
    }, 5000)
  }

  const addPerson = (event) => {
    event.preventDefault()

    // Check if the person exists in the phonebook, if no add person
    if (persons.some((element) => {return element.name === newName})) {
      if (window.confirm(`${newName} is already added to Phonebook, replace old number with a new one?`)) {
        let personChange = persons.find((element) => element.name === newName)
        personChange.number = newNumber

        phoneBookService
        .updatePerson(personChange)
        .then(response => {
          setPersonLists()
        })
        .catch(error => {
          showMsg(`Information of ${newName} has already been removed from server`, 'error')
        })
      }
    } else {
      const personArrayElem = {
        name: newName,
        number: newNumber,
        id: persons.length + 1
      }

      phoneBookService
      .create(personArrayElem)
      .then(person => {
        showMsg(`Added ${person.name}`, 'success')
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
      <Notification message={message} msgType={msgType}/>
      <InputField dispText={'Filter shown with'} stateVar={filterName} changeHdl={handleFilterNameAddition}/>
      <h3>Add a new</h3>
      <PersonForm personFormObj={personFormObj}/>
      <h3>Numbers</h3>
      <PersonList personList={personDisplay} deleteHdl={handlePersonDelete}/>
    </div>
  )
}

export default App