import React from 'react';
import './App.css';
import HomePage from './pages/homepage/homepage.component';
import { Route, Switch } from 'react-router-dom';

const HatsPage =  () => {
  return (
    <h1> THIS IS HATS PAGE</h1>
  )
}

function App() {
  return (
    <div> 
      <Switch> 
        <Route exact path="/" component ={HomePage}></Route>
        <Route path="/hats" component ={HatsPage}></Route>
      </Switch>
    </div>
  )
}

export default App;
