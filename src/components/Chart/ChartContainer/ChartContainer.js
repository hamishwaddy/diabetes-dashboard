import React, { Component } from 'react'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import Bg24HourChart from '../Bg24HourChart'

import classes from './ChartContainer.module.css'

// -- Chart Style Options -- //
// Chart.defaults.global.defaultFontFamily = "Montserrat"
// Chart.defaults.global.legend.display = false
// Chart.defaults.global.elements.line.tension = 1

class ChartContainer extends Component {
  constructor(props) {
    super(props);

    this.state = {
      chartData: props.chartData,
      baseUrl: 'https://orriebetes.herokuapp.com/api/v1/',
      chartTitle: 'Blood Glucose: Last 24 Hours'
    }
  }

  componentDidMount() {
    window.setInterval(() => {
      this.setState({
        chartData: this.props.data
      })
    }, 5000)
  }



  render() {
    return (
      <div className={classes.Chart}>
        <div className={classes.ChartHeader}>
          <FontAwesomeIcon
            className={classes.ChartIcon}
            icon="tint" />
          <p>{this.props.chartTitle}</p>
        </div>
        <Bg24HourChart
          title={this.props.chartTitle}
          chartData={this.state.chartData} />
      </div>
    )
  }
}

export default ChartContainer
