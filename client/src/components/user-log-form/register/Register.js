import React from 'react';
import './register.css';
import { FormControl, InputLabel, Input, FormHelperText, Button, FormGroup } from '@material-ui/core';

const Register = ({ handleOnChange, handleSubmit }) => {
    return (
        <div className="register-page">
            <div className="contaner-register">
                <FormGroup className="form-register">
                    <h2>Register</h2>
                    <FormControl className="form-control-register">
                        <InputLabel htmlFor="my-input">User Name</InputLabel>
                        <Input className="register-input"
                            name="username"
                            type="text"
                            onChange={handleOnChange}
                        />
                    </FormControl>
                    <FormControl className="form-control-register">
                        <InputLabel htmlFor="my-input">Last Name</InputLabel>
                        <Input className="register-input"
                            name="lastName"
                            type="text"
                            onChange={handleOnChange}
                        />
                      
                    </FormControl>
                    <FormControl className="form-control-register">
                        <InputLabel htmlFor="my-input">Email Address</InputLabel>
                        <Input className="register-input"
                            name="email"
                            type="email"
                            onChange={handleOnChange}
                        />
                     
                        <FormHelperText id="my-helper-text">We'll never share your email.</FormHelperText>
                    </FormControl>
                    <FormControl className="form-control-register">
                        <InputLabel htmlFor="my-input">Password</InputLabel>
                        <Input className="register-input"
                            name="password"
                            type="password"
                            onChange={handleOnChange}
                        />
                      
                    </FormControl>
                    <Button onClick={handleSubmit} className="btn" variant="contained" color="primary" >
                        submit
                 </Button>
                </FormGroup>
            </div>
        </div>
    )
}

export default Register;
