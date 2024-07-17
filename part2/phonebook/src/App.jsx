import { useState, useEffect } from 'react'
import SearchFilter from './components/SearchFilter';
import PersonForm from './components/PersonForm';
import Persons from './components/Persons';

import axios from 'axios';

const App = () => {
  const [persons, setPersons] = useState([]);
  const [newName, setNewName] = useState('');
  const [newNumber, setNewNumber] = useState('');
  const [filterName, setFilterName] = useState('');

  useEffect(() => {
    console.log('fetching persons data');

    axios
    .get('http://localhost:3001/persons')
    .then(res => {
      console.log('data fetched');
      setPersons(res.data);
      console.log(res.data);
    })
  }, [])


  const handleNewName = (event) => {
    setNewName(event.target.value);
  }
  const handleNewNumber = (event) => {
    setNewNumber(event.target.value);
  }
  const handleFilterName = (event) => {
    setFilterName(event.target.value);
  }

  const handlePersonAdd = (event) => {
    event.preventDefault();
    if(persons.find(person => person.name === newName)) {
      alert(`${newName} is already in the phonebook!`);
    }
    else{
      axios
      .post('http://localhost:3001/persons', {name: newName, number: newNumber})
      .then(res => {
        setPersons(persons.concat(res.data));
        setNewName('');
        setNewNumber('');
      })
    }
  }

  const personsFiltered = filterName !== '' ? persons.filter(person => person.name.toLowerCase().includes(filterName.toLowerCase())) : persons;

  return (
    <div>
      <h2>Phonebook</h2>
      <SearchFilter filterName={filterName} handleFilterName={handleFilterName} />
      <h2>Add New Person</h2>
      <PersonForm 
        newName={newName} 
        newNumber={newNumber} 
        handleNewName={handleNewName} 
        handleNewNumber={handleNewNumber} 
        handlePersonAdd={handlePersonAdd} 
      />
      <h2>Numbers</h2>
      <Persons persons={personsFiltered} />
    </div>
  )
}

export default App