import React, { useState } from 'react';
import './country.css'
const Country = ({country}) => {
    const [visited, setVisited] = useState(false);
    
    const handleVisited = () => {
        setVisited(!visited)
    }
    const {name, flags, area, population, cca2} = country;
    return (
        <div className='country'>
            <img src={flags.png} alt="" />
            <h3>Name: {name.common}</h3>
            <p>Population: {population}</p>
            <p>Area: {area}</p>
            <p><small>Country Code: {cca2}</small></p>
            <button onClick={handleVisited}>{visited? "Visited": "Not visited"}</button>
            {
                visited ? 'I have visited': 'Going there'
            }
        </div>
    );
};

export default Country;