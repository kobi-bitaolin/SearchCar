import React from 'react';
import ReactDOM from 'react-dom';
import App from '../../client/src/components/app/App';
import {IsUserLogProvider} from './components/context/user';

ReactDOM.render(
  <React.StrictMode>
    <IsUserLogProvider>
    <App />
    </IsUserLogProvider>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA

