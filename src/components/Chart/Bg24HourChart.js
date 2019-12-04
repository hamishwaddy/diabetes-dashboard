import React, { Component } from 'react'
import { Line } from 'react-chartjs-2'
import axios from 'axios'
import moment from 'moment'

import classes from './Bg24HourChart.module.css'

class Bg24HourChart extends Component {
  constructor(props) {
    super(props)

    this.state = {
      baseUrl: 'https://orriebetes.herokuapp.com/api/v1/',
      chartData: {},
      chartOptions: {},
      chartTitle: '...BG 24 Hour Trend...'
    }
  }

  componentDidMount() {
    this.getChartData();
  }

  getChartData() {
    axios
      .get(this.state.baseUrl + 'entries.json?count=288')
      .then(res => {
        let labels = []
        let data = []
        let mmolValue, sgvValue, sysTime, formattedTime
        for (var i = 0; i < res.data.length; i++) {
          sysTime = res.data[i].sysTime
          formattedTime = moment.utc(sysTime).local().format('HH:mm')
          labels.push(formattedTime)
          sgvValue = (res.data[i].sgv)
          mmolValue = (sgvValue / 18).toFixed(1)
          data.push(mmolValue)
        }
        labels.reverse()
        data.reverse()

        this.setState({
          chartData: {
            labels: labels,
            datasets: [{
              label: 'BG Numbers',
              backgroundColor: '#ececec',
              borderColor: '#d4d4d4',
              pointRadius: 1,
              pointBackgroundColor: '#d4d4d4',
              showLine: true,
              data: data,
            }],
          },
          chartOptions: {
            responsive: true,
            maintainAspectRatio: false,
            legend: {
              display: false
            },
            scales: {
              xAxes: [
                {
                  ticks: {
                    display: true,
                    autoSkip: true,
                    maxTicksLimit: 12
                  }
                }
              ],
              yAxes: [
                {
                  ticks: {
                    beginAtZero: true,
                    max: 24,
                    min: 0,
                    stepSize: 2
                  },
                  display: true,
                }
              ]
            }
          }
        })
      })
      .catch(err => console.error(err));
  }

  render() {
    return (
      <div
        className={classes.ChartContainer}
        title={this.state.chartTitle}>
        <Line
          data={this.state.chartData}
          options={this.state.chartOptions}
          width={450}
          height={250} />
      </div >
    )
  }
}

export default Bg24HourChart
