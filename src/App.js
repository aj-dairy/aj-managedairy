import React from 'react';
import logo from './logo.svg';
import './App.css';
import Navbar from './components/Navbar';
import Home from './components/Home';
import Login from './components/Login';
import Error from './components/Error';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import CowImage from './content/images/cow-feed.jpg';

var backgrounImage = {
  width: "100%",
  height: "100%",
  backgroundImage: `url(${CowImage})`  
};

function App() {
  return (   

      <BrowserRouter >
      <div className="MHome"> 
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
