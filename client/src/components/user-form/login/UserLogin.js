import React, { useState } from 'react';
import Login from './LogIn';
import axios from 'axios';
import { Redirect } from 'react-router-dom';


const UserLogin = () => {
    // const [flag, setFlag] = useState(false);
    const [isAuthenticated, setIsAuthenticated] = useState(false);
    const [login, setLogin] = useState({ email: '', password: '' });

    const isUserExsiet = () => {
        setIsAuthenticated(true)
        let userData = {...login}
        axios.post('/users/singup', {
            email: userData.email,
            password: userData.password
        })
        .then(res => {
            console.log(res);
            setIsAuthenticated(true); 
            if(res.status === 201 && isAuthenticated){
                return <Redirect to="/carsbord" />
            }
        })
        .catch(err => {
            console.log('Erorr Occured!!',err);
        })
    };

    const getInputValue = e => {
        const Inputs = { ...login };
        Inputs[e.target.name] = e.target.value;
        setLogin(Inputs)

    };


    console.log("login", login);
    return (
        <div>
            <Login
                handleLogin={isUserExsiet}
                handleInput={getInputValue}
            />
        </div>
    )
}

export default UserLogin;
