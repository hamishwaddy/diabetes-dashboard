import React, { Component } from 'react';
import './App.css';
import Layout from './containers/Layout/Layout'
import { library } from '@fortawesome/fontawesome-svg-core'
import { fab } from '@fortawesome/free-brands-svg-icons'
import { faCheckSquare, faCoffee, faTint, faSyringe, faCheckDouble, faChartArea } from '@fortawesome/free-solid-svg-icons'

library.add(fab, faCheckSquare, faCoffee, faTint, faSyringe, faCheckDouble, faChartArea)


class App extends Component {
  render() {
    return (
      <div className="App">
        <Layout />
      </div>
    );
  }
}

export default App;
