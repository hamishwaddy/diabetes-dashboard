import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom';

import './App.css';
import Layout from './containers/Layout/Layout'
import { library } from '@fortawesome/fontawesome-svg-core'
import { fab } from '@fortawesome/free-brands-svg-icons'
import { faCheckSquare, faCoffee, faTint, faSyringe, faCheckDouble, faChartArea } from '@fortawesome/free-solid-svg-icons'
import Bg24HourChart from './components/Chart/Bg24HourChart';
import Insulin24Hours from './components/Chart/Insulin24Hours/Insulin24Hours'
import Auth from './containers/Auth/Auth';

library.add(fab, faCheckSquare, faCoffee, faTint, faSyringe, faCheckDouble, faChartArea)


class App extends Component {
  render() {
    return (
      <div className="App">
        <Layout>
          <Switch>
            <Route path="/bg" component={Bg24HourChart} />
            <Route path="/insulin" component={Insulin24Hours} />
            <Route path="/auth" component={Auth} />
            <Route path="/" exact component={Bg24HourChart} />
          </Switch>
        </Layout>
      </div>
    );
  }
}

export default App;
