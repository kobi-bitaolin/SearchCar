import React, { useState } from 'react';
import axios from 'axios';
import Register from './Register';
import { useHistory } from 'react-router';

const UserRegister = () => {
    const [registerForm, setRegisterForm] = useState({
        username: '',
        lastName: '',
        email: '',
        password: '',
        usernameErorr:'asfsfddfshfsdh',
        lastNameErorr:'',
        emailErorr:'',
        passwordErorr:''
    });

    const history = useHistory();
    const createUserHandler = () => {
        const registerData = { ...registerForm }
        axios.post('/users/signup', {
            username: registerData.username,
            lastName: registerData.lastName,
            email: registerData.email,
            password: registerData.password,
            authMethod: "jwt"
        })
            .then(() => {
                history.push('/');
            })
            .catch(err => console.log(err));
                   
    };

    const getInputValue = e => {
        const Inputs = { ...registerForm };
        Inputs[e.target.name] = e.target.value;
        setRegisterForm(Inputs)
    };


  
   
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
