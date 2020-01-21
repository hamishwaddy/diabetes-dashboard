import React, { Component } from 'react'; 

import axios from 'axios';
import moment from 'moment';

import classes from './CarbsLastIntake.module.css';

class CarbsLastIntake extends Component {
  constructor(props) {
    super(props)

    this.state = {
      baseUrl: 'https://orriebetes.herokuapp.com/api/v1/',
      lastCarbs: null,
      time: null
    }
  }

  componentDidMount() {
    this.getCarbData()
  }

  getCarbData() {
    axios
      .get(this.state.baseUrl + 'treatments.json')
      .then(res => {
        let lastCarbs = res.data[0].carbs
        let sysTime = res.data[0].sysTime
        let time = moment(sysTime).format('MMM Do, HH:mm')
      
        this.setState({
          lastCarbs: lastCarbs,
          time: time
        })
      })      
  }

  render() {
    return (
     <div className={classes.Content}>
        <h5>MOST RECENT CARBS</h5>
        <h1>{this.state.lastCarbs}</h1>
        <h5>Grams</h5>
        <h6 className={classes.time}>{this.state.time}</h6>
      </div>
    );
  }
}

export default CarbsLastIntake;