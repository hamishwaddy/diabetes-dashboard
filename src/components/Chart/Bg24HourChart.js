import React, { Component } from 'react'
import { Line } from 'react-chartjs-2'
import axios from 'axios'

import classes from './Bg24HourChart.module.css'

class Bg24HourChart extends Component {
  constructor(props) {
    super(props);

    this.state = {
      chartData: props.chartData,
      baseUrl: 'https://orriebetes.herokuapp.com/api/v1/',
      chartTitle: 'Blood Glucose: Last 24 Hours'
    }
  }

  componentDidMount() {
    this.getChartData();
  }

  getChartData() {

  }

  // getChartData() {
  //   axios
  //     .get(this.state.baseUrl + 'entries.json?count=288')
  //     .then(res => {
  //       console.log('componentDidMount(): ' + res.data)
  //       let sgvValue;
  //       let mmolValue;
  //       let sysTime;
  //       const values = [{
  //         sgvValue: res.data.sgv,
  //         sysTime: res.data.sysTime
  //       }]
  //       for (var i = 0; i < res.data.length; i++) {
  //         sgvValue = res.data[i].sgv
  //         mmolValue = (sgvValue / 18).toFixed(1)
  //         sysTime = res.data[i].sysTime
  //         values.push(mmolValue)
  //       }
  //       values.reverse();
  //       this.setState({ chartData: values })
  //     })
  //     .catch(err => console.error(err));
  // }



  render() {
    // const data = this.state.chartData
    // console.log('render(): ' + chartData)

    // const endTime = data[0].sysTime
    // const startTime = data[data.length].sysTime
    // console.log('start: ' + startTime)
    // console.log('end: ' + endTime)
    // const chartData = {
    //   labels: ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9', '10', '11', '12', '13', '14', '15', '16', '17', '18', '19', '20', '21', '22', '23'],
    //   datasets: [
    //     {
    //       label: '',
    //       fill: true,
    //       lineTension: 0.1,
    //       backgroundColor: 'rgba(75,192,192,0.4)',
    //       borderColor: 'rgba(75,192,192,1)',
    //       borderCapStyle: 'butt',
    //       borderDash: [],
    //       borderDashOffset: 0.0,
    //       borderJoinStyle: 'miter',
    //       pointBorderColor: 'rgba(75,192,192,1)',
    //       pointBackgroundColor: '#fff',
    //       pointBorderWidth: 1,
    //       pointHoverRadius: 5,
    //       pointHoverBackgroundColor: 'rgba(75,192,192,1)',
    //       pointHoverBorderColor: 'rgba(220,220,220,1)',
    //       pointHoverBorderWidth: 2,
    //       pointRadius: 1,
    //       pointHitRadius: 10,
    //       spanGaps: true,
    //       data: this.state.chartData
    //     }
    //   ],
    //   options: {
    //     title: {
    //       display: false
    //     },
    //     scales: {
    //       yAxes: [{
    //         stacked: true,
    //         gridlines: {
    //           display: true,
    //           color: 'rgba(255,99,132,0.2)'
    //         },
    //         ticks: {
    //           beginAtZero: true,
    //           max: 23,
    //           min: 0,
    //           stepSize: 1
    //         }
    //       }],
    //       xAxes: [{
    //         gridlines: {
    //           display: false
    //         },
    //         type: 'time',
    //         time: {
    //           unit: 'hour',
    //           displayFormats: 'hA',
    //           disribution: 'linear'
    //         }
    //       }]
    //     }
    //   }
    // }
    // this.setState({ data: this.state.data })
    return (
      <div className={classes.ChartContainer}>
        <Line
          data={this.state.chartData}
          options={{}} />
      </div>
    )
  }
}

export default Bg24HourChart
