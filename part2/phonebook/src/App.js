import React, { useState, useEffect } from 'react';
import Filter from './components/Filter';
import PhoneForm from './components/PhoneForm';
import { getAll, create, deleteRecord, update } from './services/persons';
import Notification from './components/Notification';

const DeleteButton = ({ handleClick }) => {
  return <button onClick={handleClick}>Delete</button>
}

const Contact = ({ name, number }) => {
  return <span style={{ marginRight: "1em" }} key={name}>{name} {number}</span>;
}

const App = () => {
  const [persons, setPersons] = useState([]);
  const [newName, setNewName] = useState('');
  const [newPhone, setNewPhone] = useState('');
  const [query, search] = useState('');
  const [message, setMessage] = useState(null);

  useEffect(() => {
    getAll().then(phonebook => setPersons(phonebook));
  }, []);

  const addEntry = (e) => {
    e.preventDefault();
    const p = persons.find(({ name }) => name.toLowerCase() === newName.toLowerCase());
    if (p) {
      if (window.confirm(`${p.name} is already added to the phonebook, replace the old number with new one?`)) {
        update(p.id, { ...p, number: newPhone }).then((data) => {
          setPersons(persons.map(person => person.id === p.id ? data : person));
          setMessage({ note: `Updated details for ${p.name}`, success: true });
        }).catch(() => {
          setMessage({ note: `Contact ${p.name} does not exist`, success: false });
          setPersons(persons.filter(person => person.id !== p.id));
        });
      }
    } else {
      create({ name: newName, number: newPhone })
        .then(data => {
          setPersons(persons.concat(data));
          setMessage({ note: `Added ${data.name}`, success: true });
        })
    }
    setNewName('');
    setNewPhone('');
  };

  const deleteEntry = ({ id, name }) => {
    return () => {
      if (window.confirm(`Delete ${name} ?`)) {
        deleteRecord(id).then(() => {
          setPersons(persons.filter(person => person.id !== id));
          setMessage({ note: `Deleted ${name}`, success: true });
        }).catch(() => {
          setMessage({ note: `Information of ${name} has already been removed from server`, success: false });
          setPersons(persons.filter(person => person.id !== id));
        });
      }
    }
  }

  return (
    <div>
      <h2>Phonebook</h2>
      <Notification message={message} updateMessage={setMessage} />
      <Filter query={query} handleChange={(e) => search(e.target.value)} />
      <PhoneForm newName={newName} newPhone={newPhone} handleNewName={(e) => {
        setNewName(e.target.value);
      }} handleNewPhone={(e) => {
        setNewPhone(e.target.value);
      }} handleSubmit={addEntry} />
      <h2>Numbers</h2>
      {persons
        .filter(({ name }) => new RegExp("^" + query, "i").test(name))
        .map(person => {
          return (
            <div key={person.id}>
              <Contact {...person} />
              <DeleteButton handleClick={deleteEntry(person)} />
            </div>);
        })
      }
    </div>
  )
}

export default App;
