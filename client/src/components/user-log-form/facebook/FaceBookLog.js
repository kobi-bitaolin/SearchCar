import React, { useContext } from 'react';
import FacebookLogin from 'react-facebook-login';
import axios from 'axios';
import { useHistory } from 'react-router-dom';
import { IsUserLogContext } from '../../context/user';

const FaceBookLog = () => {
    const {setIsLog} = useContext(IsUserLogContext);
    const history = useHistory();
    const responseFacebook = response => {
        console.log(response);
        const { accessToken, id, name, email } = response;

        axios.post('users/facebook/login', {
            username: name,
            facebookUserID: id,
            email,
            authMethod: "facebook" 
        })
            .then(res => {
                localStorage.setItem('login',JSON.stringify({...res.data,accessToken }));
                setIsLog(true);
                history.push('/carsbord');
            })
    }

    let fbContent = (
        <FacebookLogin
            appId="317858369537395"
            fields="name,email"
            autoLoad={false}
            callback={responseFacebook} />
    )

    return (
        <div>
            {fbContent}
        </div>
    )
}

export default FaceBookLog;
