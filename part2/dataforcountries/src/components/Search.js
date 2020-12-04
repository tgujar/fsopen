import React from 'react';

function Search({filter, handleChange}) {
    return (
    <div>
        <label>find countries
        <input value={filter} onChange={handleChange} />
        </label>
    </div>);
}

export default Search