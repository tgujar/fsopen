import React, { useState } from 'react';
import Filter from './components/Filter';
import Display from './components/Display';
import PhoneForm from './components/PhoneForm'

const App = () => {
  const [persons, setPersons] = useState([
    { name: 'tanmay', number: '124-323-4222' },
    { name: 'vaishali', number: '231-331-3138' },
    { name: 'tanvi', number: '231-313-1318' }
  ]);
  const [newName, setNewName] = useState('');
  const [newPhone, setNewPhone] = useState('');
  const [query, search] = useState('');

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
