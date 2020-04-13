import React from 'react';
import logo from './logo.svg';
import './App.css';
import Navbar from './components/Navbar';
import Home from './components/Home';
import Login from './components/Login';
import Error from './components/Error';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

function App() {
  return (   

      <BrowserRouter >
      <div> 
        <Navbar />
        <Switch>
      <Route path="/" component={Login} exact />
      <Route path="/home" component={Home} />
      <Route component={Error}/>
      </Switch>
      </div>
      </BrowserRouter> 
  );
}

export default App;
