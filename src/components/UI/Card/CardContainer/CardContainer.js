import React from 'react'
import { Link } from 'react-router-dom'
import classes from './CardContainer.module.css'
import Card from '../Card'
import Bg3HourTrend from '../../../Chart/Bg3HourTrend/Bg3HourTrend'

const CardContainer = (props) => {
  return (
    <div className={classes.CardContainer}>
      <Link key={props.Id} to={'/'} >
        <Card
          Icon="tint"
          Title="Blood Glucose"
          Graphic={<Bg3HourTrend />}
          Description="3 Hour Trend"
          Id="1" />
      </Link>
      <Link key={props.Id} to="/insulin">
        <Card
          Icon="syringe"
          Title="Insulin"
          Data="Ave TDD"
          Description="Ave Total Daily Dose"
          Id="2" />
      </Link>
      <Link key={props.id} to="/success">
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
