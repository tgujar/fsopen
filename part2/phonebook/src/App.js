import React, { useState, useEffect } from 'react';
import Filter from './components/Filter';
import Display from './components/Display';
import PhoneForm from './components/PhoneForm';
import axios from 'axios';

const App = () => {
  const [persons, setPersons] = useState([]);
  const [newName, setNewName] = useState('');
  const [newPhone, setNewPhone] = useState('');
  const [query, search] = useState('');

  useEffect(() => {
    axios
      .get('http://localhost:3001/persons')
      .then(phonebook => setPersons(phonebook.data));
  }, []);
  const addEntry = (e) => {
    e.preventDefault();
    if (persons.some(({ name }) => name.toLowerCase() === newName.toLowerCase())) {
      alert(`${newName} is already added to phonebook`);
    } else {
      setPersons(persons.concat({ name: newName, number: newPhone }));
    }
    setNewName('');
    setNewPhone('');
  };

  return (
    <div>
      <h2>Phonebook</h2>
      <Filter query={query} handleChange={(e) => search(e.target.value)} />
      <PhoneForm newName={newName} newPhone={newPhone} handleNewName={(e) => {
        setNewName(e.target.value);
      }} handleNewPhone={(e) => {
        setNewPhone(e.target.value);
      }} handleSubmit={addEntry} />
        <h2>Numbers</h2>
        <Display persons={persons} filter={query} />
    </div>
  )
}

export default App;
