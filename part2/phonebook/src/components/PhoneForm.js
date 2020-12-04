import React from 'react';

const PhoneForm = ({ newName, newPhone, handleSubmit, handleNewName, handleNewPhone }) => {
    return <form onSubmit={handleSubmit}>
      <h3>add a new</h3>
      <div>
        name: <input value={newName} onChange={handleNewName} required />
      </div>
      <div>
        number: <input type="tel" value={newPhone} onChange={handleNewPhone}
        required /><br />
      </div>
      <div>
        <button type="submit">add</button>
      </div>
    </form>
}

export default PhoneForm;