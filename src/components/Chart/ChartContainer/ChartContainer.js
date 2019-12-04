import React, { Component } from 'react'
import { Route, NavLink } from 'react-router-dom'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import Bg24HourChart from '../Bg24HourChart'
import Bg7DayTrend from '../Bg7DayTrend/Bg7DayTrend'
import Bg30DayTrend from '../Bg30DayTrend/Bg30DayTrend'

import classes from './ChartContainer.module.css'

class ChartContainer extends Component {
  constructor(props) {
    super(props);

    this.state = {
      chartData: props.chartData,
      baseUrl: 'https://orriebetes.herokuapp.com/api/v1/',
      chartTitle: props.chartTitle
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
        <nav>
          <ul>
            <li>
              <NavLink to="/bg24hour">24 HOURS</NavLink>
            </li>         
            
            <li>
              <NavLink to="/bg2day">2 DAYS</NavLink>
            </li>
            <li>
              <NavLink to="/bg4day">4 DAYS</NavLink>
            </li>
          </ul>
        </nav>
        <Route path="/" exact component={Bg24HourChart} />
        <Route path="/bg24hour" component={Bg24HourChart} />
        <Route path="/bg2day" component={Bg7DayTrend} />
        <Route path="/bg4day" component={Bg30DayTrend} />
      </div>
    )
  }
}

export default ChartContainer
