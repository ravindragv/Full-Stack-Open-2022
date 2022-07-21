import axios from 'axios'
const baseUrl = '/api/persons'

const getAll = () => {
  const request = axios.get(baseUrl)
  return request.then(response => response.data)
}

const create = newObject => {
  const request =  axios.post(baseUrl, newObject)
  return request.then(response => response.data)
}

const deletePerson = (idx) => {
    const request = axios.delete(`${baseUrl}/${idx}`)
    return request.then(response => response.data)
}

const updatePerson = (person) => {
    const request = axios.put(`${baseUrl}/${person.name}`, person)
    return request.then(response => response.data)
}

const phoneBookService =  {
  getAll, create, deletePerson, updatePerson
}

export default phoneBookService