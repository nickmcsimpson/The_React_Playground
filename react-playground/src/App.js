import { React, Component } from 'react';
import { Route, Switch } from 'react-router-dom';

import './App.css';
import Home from './App/pages/Home';
import Planets from './App/pages/Planets';

class App extends Component {
  render() {
    const App = () => (
      <div>
        <Switch>
          <Route exact path='/' component={Home}/>
          <Route path='/planets' component={Planets}/>
        </Switch>
      </div>
    )
    return (
      <Switch>
        <App/>
      </Switch>
    );
  }
}

export default App;
