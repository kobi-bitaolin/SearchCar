import React, { useState,useContext } from 'react';
import Login from './LogIn';
import axios from 'axios';
import { useHistory } from 'react-router';
import {IsUserLogContext} from '../../context/user';




const UserLogin = () => {
    const [login, setLogin] = useState({ username: '', password: '' })
    const history = useHistory();
    const {setIsLog} = useContext(IsUserLogContext);
    const isUserExsiet = () => {
        const logInData = { ...login }
        axios.post('/users/login', {
            username: logInData.username,
            password: logInData.password

        })
            .then(res => {
                    console.log(res.data); 
                    history.push('/carsbord'); 
                    setIsLog(true);    
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
