import React from 'react';
import Weather from './Weather'

function ShowButton({countryName, handleClick}) {
    return <button onClick={() => handleClick(countryName)}>show</button>
}

function CountryInfo({country}) {
    return (
        <div>
            <h2>{country.name}</h2>
            <p>Capital: {country.capital}</p>
            <p>Population: {country.population}</p>
            <h3>Languages</h3>
            <ul>
                {country.languages.map(info => <li key={info.name}>{info.name}</li>)}
            </ul>
            <div>
            <img src={country.flag} width="200px" height="200px" alt={`flag of ${country.name}`}/>
            </div>
            <Weather place={country.capital} />
        </div>
    );
}

function Display({countries, filter, update}) {
    if (countries.length === 0) return <p>Waiting for results...</p>
    const filtered = countries.filter(({name}) => new RegExp(`${filter}`, "gi").test(name));
    if (filtered.length === 1) {
        return <CountryInfo country={filtered[0]} />
    } else if (filtered.length <= 10) {
        return filtered.map(country => {
            return (
            <p key={country.name}>{country.name}
                <ShowButton countryName={country.name} handleClick={update} />
            </p>);
        });
    } else {
        return <p>Too many matches, specify another filter</p>
    }
}

export default Display