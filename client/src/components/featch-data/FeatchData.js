import React, { useState, useEffect } from 'react';
import CarsTable from '../cars-table/CarsTable';
import axios from 'axios';
import useLocalState from './LocalStorage'

const FeachData = () => {
    const [value, setValue] = useLocalState('');
    const [cars, setCras] = useState([]);

    useEffect(() => {
        axios.get('/cars')
            .then(res => {
                setCras(res.data);
            })
            .catch(err => {
                console.log(err);
            })

    }, []);

    const handelOnChange = e => {
        setValue(e.target.value);
    };

 
    let filterCarName = cars.filter(car => {
        if (car.name === value) {
            return car
        }
    })
    
    return (
        <div>
            <CarsTable cars={filterCarName}  onChange={handelOnChange}  />
        </div>
    )
}
export default FeachData;