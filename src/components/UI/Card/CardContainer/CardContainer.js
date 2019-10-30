import React from 'react'
import classes from './CardContainer.module.css'
import Card from '../Card'
import Bg3HourTrend from '../../../Chart/Bg3HourTrend/Bg3HourTrend'

const CardContainer = (props) => {
  return (
    <div className={classes.CardContainer}>
      <Card
        Icon="tint"
        Title="Blood Glucose"
        Graphic={<Bg3HourTrend />}
        Description="3 Hour Trend" />
      <Card
        Icon="syringe"
        Title="Insulin"
        Data="Ave TDD"
        Description="Ave Total Daily Dose" />
      <Card
        Icon="check-double"
        Title="Success"
        Data="something"
        Description="some cool data" />
    </div>
  )
}

export default CardContainer
