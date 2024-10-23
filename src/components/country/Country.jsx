import React from 'react';
import './country.css'
const Country = ({country}) => {
    console.log(country);
    const {name, flags, area, population, cca2} = country;
    return (
        <div className='country'>
            <img src={flags.png} alt="" />
            <h3>Name: {name.common}</h3>
            <p>Population: {population}</p>
            <p>Area: {area}</p>
            <p><small>Country Code: {cca2}</small></p>
        </div>
    );
};

export default Country;