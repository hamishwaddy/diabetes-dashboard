import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom';

import './App.css';

import Layout from './pages/Layout/Layout'
import { library } from '@fortawesome/fontawesome-svg-core'
import { fab } from '@fortawesome/free-brands-svg-icons'
import { faCheckSquare, faCoffee, faTint, faSyringe, faChartArea, faPizzaSlice } from '@fortawesome/free-solid-svg-icons'
import SignInSignUpUser from './pages/SignInSignUpUser/SignInSignUpUser';
import Toolbar from '../src/components/Navigation/Toolbar/Toolbar';
import { auth } from './firebase/firebase.utils'

library.add(
  fab, 
  faCheckSquare, 
  faCoffee, 
  faTint, 
  faSyringe, 
  faChartArea, 
  faPizzaSlice
  );


class App extends Component {
constructor() {
  super();

  this.state = {
    currentUser: null
  }
}

unsubscribeFromAuth = null

componentDidMount() {
  this.unsubscribeFromAuth = auth.onAuthStateChanged(user => {
    this.setState({ currentUser: user })

    console.log(user);
  })
}

componentWillUnmount() {
  this.unsubscribeFromAuth();
}

  render() {
    return (
      <div className="App">
        <Toolbar currentUser={this.state.currentUser} />
        <Switch>
          <Route path='/signin' component={SignInSignUpUser} />
          <Route path='/dash' component={Layout} />
          <Route path='/dash/:id' component={Layout} />
          <Route path='/' exact component={Layout} />
        </Switch>
      </div>
    );
  }
}

export default App;
