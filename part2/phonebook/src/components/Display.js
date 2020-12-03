import React from 'react';

const Contact = ({ name, number }) => {
    return <p key={name}>{name} {number}</p>;
}

const Display = ({ persons, filter }) => {
    return persons.filter(({ name }) => {
        return new RegExp("^" + filter, "i").test(name);
    }).map(person => <Contact {...person} />);
}

export default Display;