import { useState, useEffect } from 'react'
import SearchFilter from './components/SearchFilter';
import PersonForm from './components/PersonForm';
import Persons from './components/Persons';
import personsService from './services/persons';
import Notification from './components/Notification';
import './index.css';

const App = () => {
  const [persons, setPersons] = useState([]);
  const [newName, setNewName] = useState('');
  const [newNumber, setNewNumber] = useState('');
  const [filterName, setFilterName] = useState('');
  const [successObj, setSuccessObj] = useState({success: true, message: null});

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
          setSuccessObj({success: true, message: `${res.name}'s has been updated to ${res.number}`});
          setTimeout(() => {
            setSuccessObj({...successObj, message: null});
          }, 5000);

          setNewName('');
          setNewNumber('');
        })
        .catch(error => {
          setSuccessObj({success: false, message: error.response.data.error});
          setTimeout(() => {
            setSuccessObj({...successObj, message: null});
          }, 5000);
          setNewName('');
          setNewNumber('');
        }
        )
      } 
    }
    else{
      personsService.create({name: newName, number: newNumber})
      .then(res => {
        setPersons(persons.concat(res));
        setSuccessObj({success: true, message: `${res.name} has been added with number ${res.number}`});
          setTimeout(() => {
            setSuccessObj({...successObj, message: null});
          }, 5000);
        setNewName('');
        setNewNumber('');
      })
      .catch(error => {
        setSuccessObj({success: false, message: error.response.data.error});
        setTimeout(() => {
          setSuccessObj({...successObj, message: null})
        }, 5000)
        setNewName('');
        setNewNumber('');
      })
    }
  }

  const handlePersonDelete = (name, id) => {
    if(window.confirm(`Delete ${name} ?`)) {
      const personDeleted = persons.find(person => person.id === id)

      personsService.deletePerson(id)
      .then(res => {
        setPersons(persons.filter(person => person.id != personDeleted.id));
      })
    }  
  }

  const personsFiltered = filterName !== '' ? persons.filter(person => person.name.toLowerCase().includes(filterName.toLowerCase())) : persons;

  return (
    <div className={'phonebook'}>
      <h2>Phonebook</h2>
      <Notification message={successObj.message} success={successObj.success} />
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