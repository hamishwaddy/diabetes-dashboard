import React, { Fragment } from 'react'
// import { Link } from 'react-router-dom';

import { auth } from '../../../firebase/firebase.utils';

import classes from './NavigationItems.module.css'
import NavigationItem from './NavigationItem/NavigationItem'

const NavigationItems = ({ currentUser }) => {
  return (
    <Fragment>
      <ul className={classes.NavigationItems}>
        <NavigationItem 
          link='/dash/bg'
          activeClassName='active'>
          BG
        </NavigationItem>
        <NavigationItem link='/dash/insulin'>INSULIN</NavigationItem>
        <NavigationItem link='/dash/carbs'>CARBS</NavigationItem>
        {/*<NavigationItem link='/basal'>BASAL</NavigationItem>*/}
        {currentUser ? 
          <NavigationItem className={classes.SignOutButton} onClick={() => auth.signOut()}>
            SIGN OUT
          </NavigationItem>
         : 
          <NavigationItem link='/signin'>SIGN IN</NavigationItem>
        }
      </ul>
    </Fragment>
  )
}

export default NavigationItems
