import React from 'react';
import './login.css';
import {Link} from 'react-router-dom';
import { FormControl, InputLabel, Input, Button, FormGroup } from '@material-ui/core';


const LogIn = (props) => {
    const { handleInput, handleLogin } = props;
    return (
        <div className="login-page">
            <div className="contaner">
                <FormGroup className="form">
                    <Link className="register-link" to="/register">register</Link>
                    <h2>Login</h2>
                    <FormControl className="form-control">
                        <InputLabel htmlFor="my-input">User name</InputLabel>
                        <Input
                            name="username"
                            type="text"
                            onChange={handleInput}
                        />
                    </FormControl>
                    <FormControl className="form-control">
                        <InputLabel htmlFor="my-input">Password</InputLabel>
                        <Input
                            name="password"
                            type="password"
                            onChange={handleInput}
                        />
                    </FormControl>
                    <Button onClick={handleLogin} className="btn" variant="contained" color="primary" >
                        submit
                    </Button>
                </FormGroup>
            </div>
        </div>
    )
}
export default LogIn;
