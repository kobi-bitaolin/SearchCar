import React, { useState } from 'react';
import Login from './LogIn';
import axios from 'axios';




const UserLogin = () => {
    const [login, setLogin] = useState({ username: '', password: '' });
    // const [isLog, setIslog]= useState(false)

    const isUserExsiet = () => {
        const logInData = { ...login }
        axios.post('/users/login', {
            username: logInData.username,
            password: logInData.password

        })
            .then(res => {
                let data = res.data;
                console.log(data.isAuthenticated);
                if (data.isAuthenticated) {
                    console.log(res.data); 
                    console.log('go to /carsbord'); 
                }
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
