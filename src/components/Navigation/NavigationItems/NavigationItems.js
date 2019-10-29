import React from 'react'

import classes from './NavigationItems.module.css'
import NavigationItem from './NavigationItem/NavigationItem'

const NavigationItems = (props) => {
  return (
    <ul className={classes.NavigationItems}>
      <NavigationItem link='/' active>BG</NavigationItem>
      <NavigationItem link='/'>INSULIN</NavigationItem>
      <NavigationItem link='/'>CARBS</NavigationItem>
      <NavigationItem link='/'>BASAL</NavigationItem>
    </ul>
  )
}

export default NavigationItems
