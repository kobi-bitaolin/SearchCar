import React, { useState } from 'react';
import axios from 'axios';
import Register from './Register';
import { Redirect } from 'react-router';

const UserRegister = () => {
    let inisialState = {
        firstName: '',
        lastName: '',
        email: '',
        password: '',
        confirmPassword: ''
    }
    const [registerForm, setRegisterForm] = useState(inisialState);
    const [flag, setFlag] = useState(false)

    const createUserHandler = () => {
        let userData = {...registerForm}
        axios.post('/users/signup', {
            firstName: userData.firstName,
            lastName: userData.lastName,
            email: userData.email,
            password: userData.password,
            confirmPassword: userData.confirmPassword
        })
        .then(res => {
            console.log(res);
            setFlag(true); 
            if(res.status === 201 && flag){
                return <Redirect to="/cars" />
            }
        })
        .catch(err => {
            console.log('Erorr Occured!!',err);
        })
    };

    const getInputValue = e => {
        const Inputs = { ...registerForm };
        Inputs[e.target.name] = e.target.value;
        setRegisterForm(Inputs)

    };
    console.log( 'register',registerForm);
    return (
        <div>
            <Register
                handleOnChange={getInputValue}
                handleSubmit={createUserHandler}
            />
        </div>
    )
}

export default UserRegister;
