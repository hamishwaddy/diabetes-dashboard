import React from 'react'
import classes from './CardContainer.module.css'
import Card from '../Card'

const CardContainer = (props) => {
  return (
    <div className={classes.CardContainer}>
      <Card
        Icon="tint"
        Title="Blood Glucose"
        Data="some data" />
      <Card
        Icon="syringe"
        Title="Insulin"
        Data="Ave TDD" />
      <Card
        Icon="check-double"
        Title="Success"
        Data="something" />
    </div>
  )
}

export default CardContainer
