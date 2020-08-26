import React from 'react';
import './login.css';
import FaceBookLog from '../facebook/FaceBookLog';
import { FormControl, InputLabel, Input, Button, FormGroup } from '@material-ui/core';


const LogIn = ({ handleInput, handleLogin }) => {
    return (
        <div>
            <div className="login-page">
                <div className="contaner">
                    <FormGroup className="form">
                        <div className="fb"><FaceBookLog /></div>
                        <h2>Login</h2>
                        <FormControl className="form-control">
                            <InputLabel htmlFor="my-input">Email</InputLabel>
                            <Input
                                name="email"
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
        </div>

    )
}
export default LogIn;
