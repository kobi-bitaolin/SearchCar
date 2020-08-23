import React, { useState } from 'react';
import axios from 'axios';
import Register from './Register';
// import { Redirect } from 'react-router';

const UserRegister = () => {
    const [registerForm, setRegisterForm] = useState({
        username: '',
        lastName: '',
        email: '',
        password: ''
    });

    const createUserHandler = () => {
        const registerData = { ...registerForm }
        axios.post('/users/signup', {
            username: registerData.username,
            lastName: registerData.lastName,
            email: registerData.email,
            password: registerData.password
        })
            .then(res => console.log(res.data))
    };

    const getInputValue = e => {
        const Inputs = { ...registerForm };
        Inputs[e.target.name] = e.target.value;
        setRegisterForm(Inputs)

    };
    console.log('register', registerForm);
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
