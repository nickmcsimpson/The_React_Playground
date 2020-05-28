import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom';

import './App.css';
import Home from './App/pages/Home';
import Planets from './App/pages/Planets';
import Spotify from './App/pages/Spotify';

class App extends Component {
  render() {
    return (
        <Switch>
          <Route exact path='/' component={Home}/>
          <Route path='/planets' component={Planets}/>
          <Route path='/spotify' component={Spotify} />
        </Switch>
    );
  }
}

export default App;
