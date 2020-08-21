import React, { useState, useEffect } from 'react';
import CarsTable from './CarsTable';
import useLocalState from './LocalStorage';
import axios from 'axios';

const CarsBord = () => {
    const [localStorageCar, setLocalStorageCar] = useLocalState('cars');
    const [inputFields, setInputFields] = useState({ name: '', year: '' });
    const [loading, setLoading] = useState(false);
    const [cars, setCars] = useState([]);

    useEffect(() => {
        axios.get('/cars')
            .then(res => {
                if (localStorageCar && localStorageCar.length) {
                    setCars(JSON.parse(localStorageCar));

                }
                else {
                    setCars(res.data);
                }
            })
            .catch(err => {
                console.log(err);
            });
    }, []);

    const getInputValue = e => {
        const tempInputs = inputFields;
        tempInputs[e.target.name] = e.target.value;
        console.log(tempInputs);
        setInputFields(tempInputs);
    };

    const searchCars = () => {
        setLoading(!false)
        axios.get('/cars')
            .then(res => {
                filterCars(res.data);
            })
            .catch(err => {
                console.log(err);
            });
    };

    const filterCars = (cars) => {
        setLoading(false)
        let filterByCarNameAndYear = cars.filter(car => {
            if (car.year === inputFields.year && car.name === inputFields.name) {
                return car
            }
        });
        setLocalStorageCar(filterByCarNameAndYear);
        setCars(filterByCarNameAndYear);
    };

    return (
        <div>
            <CarsTable
                cars={cars}
                getInputValue={getInputValue}
                searchCars={searchCars}
                loading={loading}
            />
        </div>
    )
}
export default CarsBord;