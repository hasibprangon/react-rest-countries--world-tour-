import React, { useEffect, useState } from 'react';
import Country from '../country/Country';
import './countries.css'
const Countries = () => {
    const [countries, setCountries] = useState([]);

    useEffect(() => {
        const url = `https://restcountries.com/v3.1/all`;
        fetch(url)
            .then(res => res.json())
            .then(data => setCountries(data))
    }, [])
    return (
        <div>
            <h3>Countries: {countries.length} </h3>
            <div className='countryContainer'>
                {
                    countries.map(country => <Country
                        key={country.cca3}
                        country={country}
                    ></Country>)
                }
            </div>
        </div>
    );
};

export default Countries;