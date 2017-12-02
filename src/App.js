import { Router, Route, Switch } from 'react-router';
import React, { Component } from 'react';
import Nav from './Components/NavBar/Nav';
import Bod from './Components/Body/Bod';

class App extends Component {
  render(){
    return(
      <div>
        <Nav />
        <Bod />
      </div>
    )
  }
}

export default App;
