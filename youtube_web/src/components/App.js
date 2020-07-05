import React, { Component } from 'react';
import '../css/App.css';
import Home from './Home';
import Collections from './Collections';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

class App extends Component {  
  render() {
    return (
      <Router>
        <Switch>
          <Route path='/' exact={true} component={Home}/>}/>
          <Route path='/collections' exact={true} component={Collections}/>
        </Switch>
      </Router>
    )
  }
}

export default App;