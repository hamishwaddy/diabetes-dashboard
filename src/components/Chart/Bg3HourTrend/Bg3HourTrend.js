import React, { Component } from 'react'
import { Line } from 'react-chartjs-2'
import axios from 'axios'
import moment from 'moment'

import classes from './Bg3HourTrend.module.css'

class Bg3HourTrend extends Component {
  constructor(props) {
    super(props)

    this.state = {
      baseUrl: 'https://orriebetes.herokuapp.com/api/v1/',
      chartData: {},
      chartOptions: {},
      chartTitle: '3 Hour Trend'
    }
  }

  componentDidMount() {
    this.getChartData();
  }

  getChartData() {
    axios
      .get(this.state.baseUrl + 'entries.json?count=36')
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
              label: 'Last 3 Hours',
              backgroundColor: 'transparent',
              borderColor: '#ff9f1c',
              pointRadius: 1,
              pointBackgroundColor: '#ff9f1c',
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
                  gridLines: {
                    display: false
                  },
                  ticks: {
                    display: false,
                  }
                }
              ],
              yAxes: [
                {
                  ticks: {
                    display: false,
                  },
                  display: false,
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
      <div className={classes.Chart}>
        <Line
          data={this.state.chartData}
          options={this.state.chartOptions}
          width="100"
          height="35" />
      </div>
    )
  }
}

export default Bg3HourTrend