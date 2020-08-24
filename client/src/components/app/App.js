import './App.css'
import React from 'react';
import UserLogIn from '../user-form/login/UserLogin';
import Navbar from '../navbar/Navbar';
import UserRegister from '../user-form/register/UserRegister';
import CarsBord from '../car-bord/CarsBord';
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
