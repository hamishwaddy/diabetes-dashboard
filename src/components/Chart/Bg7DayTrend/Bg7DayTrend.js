import React, { Component } from "react"
import { Line } from 'react-chartjs-2'
import axios from 'axios'
import moment from 'moment'

import classes from './Bg7DayTrend.module.css'

class Bg7DayTrend extends Component {
  constructor(props) {
    super(props)

    this.state = {
      baseUrl: 'https://orriebetes.herokuapp.com/api/v1/',
      chartData: {},
      chartOptions: {},
      chartTitle: 'BG VALUES: LAST 2 DAYS'
    }
  }

  componentDidMount() {
    this.getChartData()
  }

  getChartData() {
    axios
      .get(this.state.baseUrl + "/entries.json?count=576")
      .then(res => {
        let labels = []
        let data = []
        let mmolValue, sgvValue, sysTime, formattedTime
        for (var i = 0; i < res.data.length; i++) {
          sysTime = res.data[i].sysTime
          formattedTime = moment.utc(sysTime).local().format('dddd - HH:mm')
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
              label: 'BG VALUES: LAST 2 DAYS',
              backgroundColor: '#fff',
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
                    maxTicksLimit: 7
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
      <div className={classes.ChartContainer}>
       {/*<h4>{this.state.chartTitle}</h4>*/}
        <Line
          data={this.state.chartData}
          options={this.state.chartOptions}
          width={450}
          height={250} />
      </div>
    );
  }
}

export default Bg7DayTrend