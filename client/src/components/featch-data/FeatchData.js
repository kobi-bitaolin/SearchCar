import React, { useState, useEffect } from 'react';
import CarsTable from '../cars-table/CarsTable';
import axios from 'axios';
import useLocalState from './LocalStorage'

const FeachData = () => {
    const [value, setValue] = useLocalState('');
    const [cars, setCars] = useState([]);
    
    useEffect(() => {
        axios.get('/cars')
            .then(res => {
                setCars(res.data);
               
            })
            .catch(err => {
                console.log(err);
            })

    }, []);

    const handleOnChangeName = e => {
        setValue(e.target.value);
    };
   
 
    let filterCarName = cars.filter(car => {
        if (car.name === value) {
            return car
        }
    })

    
    
    return (
        <div>
            <CarsTable cars={filterCarName}  onChange={handleOnChangeName}/>
        </div>
    )
}
export default FeachData;