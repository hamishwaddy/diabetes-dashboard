import React, { Fragment } from 'react'

import classes from './NavigationItems.module.css'
import NavigationItem from './NavigationItem/NavigationItem'

const NavigationItems = (props) => {
  return (
    <Fragment>
      <ul className={classes.NavigationItems}>
        <NavigationItem link='/'>BG</NavigationItem>
        <NavigationItem link='/insuln'>INSULIN</NavigationItem>
        <NavigationItem link='/carbs'>CARBS</NavigationItem>
        <NavigationItem link='/basal'>BASAL</NavigationItem>
      </ul>
      {/*<Route path="/" exact component={Bg24HourChart} />*/}
    </Fragment>
  )
}

export default NavigationItems
