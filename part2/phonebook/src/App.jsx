import { useState } from 'react'
import SearchFilter from './components/SearchFilter';
import PersonForm from './components/PersonForm';
import Persons from './components/Persons';

const App = () => {
  const [persons, setPersons] = useState([
    { name: 'Arto Hellas', number: '911', id: '1' },
    { name: 'Galileo Galilei', number: '31-415-926-523', id: '2'},
    { name: 'Zi Kun Zhu', number: '226-314-4569', id: '3'},
    { name: 'COIN', number: '1-800-668-COIN', id: '4'}
  ]);
  const [newName, setNewName] = useState('');
  const [newNumber, setNewNumber] = useState('');
  const [filterName, setFilterName] = useState('');


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
      setPersons(persons.concat({name: newName, number: newNumber, id: String(persons.length + 1)}));
      setNewName('');
      setNewNumber('');
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