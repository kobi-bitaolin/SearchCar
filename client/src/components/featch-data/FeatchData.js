import React, { useState, useEffect } from 'react';
import CarsTable from '../cars-table/CarsTable';
import axios from 'axios';
import useLocalState from './LocalStorage'

const FeachData = () => {
    const [localStorageCar, setLocalStorageCar] = useLocalState('cars');
    const [inputFields, setInputFields] = useState({name: '', year: ''});
    const [cars, setCars] = useState([]);
    
    useEffect(() => {
        axios.get('/cars')
        .then(res => {
            if(localStorageCar && localStorageCar.length) {
                setCars(JSON.parse(localStorageCar));
            }
            else {
                setCars(res.data);
            }
        })
        .catch(err => {
            console.log(err);
        });
    }, [localStorageCar]);
    
    const changeInputHandler = e => {
        const tempInputs = {...inputFields};
        tempInputs[e.target.name] = e.target.value;
        setInputFields(tempInputs);
    };

    const searchCars = () => {
        const entries = Object.entries(inputFields);
        axios.get('/cars')
        .then(res => {
            filterCars(res.data, entries);
        })
        .catch(err => {
            console.log(err);
        });
    };

    const filterCars = (cars, keyWords) => {
        let item;
        let filterIsValid;
        let filterCarName = cars.filter(car => {
            filterIsValid = true;
            for (let index = 0; index < keyWords.length; index++) {
                item = keyWords[index];
                if(filterIsValid && item[1]) {
                    filterIsValid = car[item[0]] === item[1];
                };
            };
            return filterIsValid;
        });
        setLocalStorageCar(filterCarName);
        setCars(filterCarName);
    };
 
    return (
        <div>
            <CarsTable
                cars={cars}
                changeInputHandler={changeInputHandler}
                searchCars={searchCars}
                inputFields={inputFields}
            />
        </div>
    )
}
export default FeachData;