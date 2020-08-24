import React,{ createContext, useState } from 'react';

const IsUserLogContext = createContext(null);

const IsUserLogProvider = (props) => {
    const [isLog, setIsLog] = useState(false);
    return (<IsUserLogContext.Provider value={{isLog, setIsLog}}>
        {props.children}
    </IsUserLogContext.Provider>)
};


export {IsUserLogContext, IsUserLogProvider};