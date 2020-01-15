import React from 'react'
import { Link } from 'react-router-dom'
import classes from './CardContainer.module.css'
import Card from '../Card'
import Bg3HourTrend from '../../../Chart/Bg3HourTrend/Bg3HourTrend'
import Insulin24Hours from '../../../Chart/Insulin24Hours/Insulin24Hours'

const CardContainer = (props) => {
  return (
    <div className={classes.CardContainer}>
      <Link 
        key={props.Id} to={'/'} 
        className={classes.link}>
        <Card
          Icon="tint"
          Title="Blood Glucose"
          Graphic={<Bg3HourTrend />}
          // Description="3 Hour Trend"
          Id="1" />
      </Link>
      <Link 
        key={props.Id} to="/insulin"
        className={classes.link}>
        <Card
          Icon="syringe"
          Title="Insulin"
          Graphic={<Insulin24Hours />}
          // Description="Last 4 Doses Total"
          Id="2" />
      </Link>
      <Link 
        key={props.id} to="/success"
        className={classes.link}>
        <Card
          Icon="check-double"
          Title="Success"
          Data="something"
          Description="some cool data"
          Id="3" />
      </Link>
    </div>
  )
}

export default CardContainer
