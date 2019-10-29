import React from 'react'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import Bg24HourChart from '../Bg24HourChart'

import classes from './ChartContainer.module.css'

const ChartContainer = (props) => {
  return (
    <div className={classes.Chart}>
      <div className={classes.ChartHeader}>
        <FontAwesomeIcon
          className={classes.ChartIcon}
          icon="tint" />
        <p>{props.chartTitle}</p>
      </div>
      <Bg24HourChart
        title={props.chartTitle} />
    </div>
  )
}

export default ChartContainer
