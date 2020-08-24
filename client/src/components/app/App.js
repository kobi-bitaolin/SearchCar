import './App.css'
import React from 'react';
import Navbar from '../navbar/Navbar';
import CarsBord from '../car-bord/CarsBord';
import UserLogIn from '../user-log-form/login/UserLogin';
import UserRegister from '../user-log-form/register/UserRegister';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

const App = () => {
  return (
    <Router>
      <div className="App">
        <Navbar />
      </div>
      <Switch>
        <Route exact path="/" component={UserLogIn} />
        <Route path="/carsbord" component={CarsBord} />
        <Route path="/register" component={UserRegister} />
      </Switch>
    </Router>
  );
}
export default App;
