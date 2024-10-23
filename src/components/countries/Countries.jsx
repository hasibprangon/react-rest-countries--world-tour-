import React, { useEffect, useState } from 'react';

const Countries = () => {
    const [countries, setCountries] = useState([]);

    useEffect(() => {
        const url = `https://restcountries.com/v3.1/all`;
        fetch(url)
        .then(res => res.json())
        .then(data => console.log(data))
    },[])
    return (
        <div>
           <h3>this is countries page</h3> 
        </div>
    );
};

export default Countries;