import React,{ createContext, useState } from 'react';

const IsUserLogContext = createContext(null);


const IsUserLogProvider = (props) => {
    const isLogIn = localStorage.login ? true : false;
    const [isLog, setIsLog] = useState(isLogIn);
    return (<IsUserLogContext.Provider value={{isLog, setIsLog}}>
        {props.children}
    </IsUserLogContext.Provider>)
};


export {IsUserLogContext, IsUserLogProvider};