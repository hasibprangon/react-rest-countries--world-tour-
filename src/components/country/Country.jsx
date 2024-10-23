import React from 'react';
import './country.css'
const Country = ({country}) => {
    console.log(country);
    const {name, flags} = country;
    return (
        <div className='country'>
            <img src={flags.png} alt="" />
            <h3>Name: {name.common}</h3>
        </div>
    );
};

export default Country;