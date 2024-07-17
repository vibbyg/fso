import { useState, useEffect } from 'react'
import SearchFilter from './components/SearchFilter';
import PersonForm from './components/PersonForm';
import Persons from './components/Persons';
import personsService from './services/persons';

const App = () => {
  const [persons, setPersons] = useState([]);
  const [newName, setNewName] = useState('');
  const [newNumber, setNewNumber] = useState('');
  const [filterName, setFilterName] = useState('');

  useEffect(() => {
    console.log('fetching persons data');
    personsService.getAll()
    .then(initialPersons => {
      console.log('data fetched');
      setPersons(initialPersons);
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
    const person = persons.find(person => person.name === newName);
    if(person) {
      if(window.confirm(`${newName} is already in the phonebook! Replace old phone # with new one?`)) {
        personsService.update(person.id, {...person, number: newNumber})
        .then(res => {
          setPersons(persons.map(person => person.id !== res.id ? person : res));
          setNewName('');
          setNewNumber('');
        })
      } 
    }
    else{
      personsService.create({name: newName, number: newNumber})
      .then(res => {
        setPersons(persons.concat(res));
        setNewName('');
        setNewNumber('');
      })
    }
  }

  const handlePersonDelete = (name, id) => {
    console.log(`${name}: ${id}`);
    if(window.confirm(`Delete ${name} ?`)) {
      personsService.deletePerson(id)
      .then(res => {
        console.log(`deleted person: ${res.name}`);
        setPersons(persons.filter(person => person.id != res.id));
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
      <Persons persons={personsFiltered} handlePersonDelete={handlePersonDelete} />
    </div>
  )
}

export default App