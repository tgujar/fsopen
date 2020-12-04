import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Search from './components/Search';
import Display from './components/Display';

function App() {
  let [filter, updateFilter] = useState('');
  let [countries, updateContries] = useState([]);

  useEffect(() => {
    axios
      .get('https://restcountries.eu/rest/v2/all')
      .then(({data}) => updateContries(data));
  }, []);
  
  return (
    <div>
      <Search filter={filter} handleChange={(e) => updateFilter(e.target.value)} />
      <Display countries={countries} filter={filter} update={(name) => updateFilter(name)}/>
    </div>
  )
}

export default App;
