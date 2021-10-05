import React from 'react';
import {BrowserRouter as Router,Switch,Route} from "react-router-dom";
import './App.css';
import Foot from './pages/fixed/Foot';
import Nav from './pages/fixed/Nav';
import Confirm from './pages/others/Confirm';
import Home from './pages/others/Home';
import Order from './pages/others/Order';

function App() {
  return (
    <>
      <Router>
        <Nav/>
        <Switch>
        <Route path="/" exact component={Home}/>
        <Route path="/order" component={Order}/>
        <Route path="/confirm" component={Confirm}/>
        </Switch>
        <Foot/>
      </Router>
    </>
   
  );
}

export default App;
