import React, { Component } from "react";

import axios from 'axios';

import classes from './Insulin24Hours.module.css';

class Insulin24Hours extends Component {
  constructor(props) {
    super(props)

    this.state = {
      baseUrl: 'https://orriebetes.herokuapp.com/api/v1/',
      tdd: 0,
      chartData: {},
      chartOptions: {},
      chartTitle: '...Insulin Intake: Last 24 Hours...'
    }
  }

  componentDidMount() {
    this.getChartData()
  }

  getChartData() { 
    axios
      .get(this.state.baseUrl + 'treatments.json?count=4')
      .then(res => {
        let data = []
        let tdd = 0
        for (var i = 0; i < res.data.length; i++) {
          tdd += res.data[i].insulin
        }
        data.push(tdd)
        console.log("Data " + data)
      

      this.setState({
        tdd: data
      })
      console.log("TDD" + this.state.tdd)
    })
  }

  render() {
    return (
      <div className={classes.Content}>
        <h5>TOTAL OF LAST 4 DOSES</h5>
        <h1>{this.state.tdd}</h1>
        <h5>Units</h5>
      </div>
    )
  }
}

export default Insulin24Hours;