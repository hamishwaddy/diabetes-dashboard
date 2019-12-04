import React, { Component } from "react";

import axios from 'axios'

class Insulin24Hours extends Component {
  constructor(props) {
    super(props)

    this.state = {
      baseUrl: 'https://orriebetes.herokuapp.com/api/v1/',
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
        // let labels = []
        let data = []
        let tdd = 0
        console.log(res.data);
        for (var i = 0; i < res.data.length; i++) {
          tdd += res.data[i].insulin
        }
        console.log(tdd);
        data.push(tdd)
      })

  }



  render() {
    return (
      <div>

      </div>
    );
  }
}

export default Insulin24Hours;