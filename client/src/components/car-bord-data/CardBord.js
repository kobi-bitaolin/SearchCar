import React, { useState, useEffect } from 'react';
import CarsTable from '../cars-table/CarsTable';
import useLocalState from './LocalStorage';
import axios from 'axios';

const CarsBord = () => {
    const [localStorageCar, setLocalStorageCar] = useLocalState('cars');
    const [inputFields, setInputFields] = useState({name: '', year: ''});
    const [loading, setLoading] = useState(false);
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
    },[]);
    
    const changeInputHandler = e => {
        const tempInputs = {...inputFields};
        tempInputs[e.target.name] = e.target.value;
        console.log(tempInputs);
        setInputFields(tempInputs);
    };

    const searchCars = () => {
        setLoading(!false)
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
        setLoading(false)
        let item;
        let filterIsValid;
        let filterByCarNameAndYear = cars.filter(car => {
            filterIsValid = true;
            for (let index = 0; index < keyWords.length; index++) {
                item = keyWords[index];
                if(filterIsValid && item[1]) {
                    filterIsValid = car[item[0]] === item[1];
                };
            };  
            
            return filterIsValid;
        });
        setLocalStorageCar(filterByCarNameAndYear);
        setCars(filterByCarNameAndYear);
    };
 
    return (
        <div>
            <CarsTable
                cars={cars}
                changeInputHandler={changeInputHandler}
                searchCars={searchCars}
                inputFields={inputFields}
                loading={loading}
            />    
        </div>
    )
}
export default CarsBord;