import React from 'react'

import classes from './Toolbar.module.css'
import Logo from '../../Logo/Logo'
import NavigationItems from '../NavigationItems/NavigationItems'
import Hamburger from '../SideDrawer/Hamburger/Hamburger'

const Toolbar = (props) => {
  return (
    <header className={classes.Toolbar}>
      <Hamburger clicked={props.toggleSideDrawer} />
      <div className={classes.Logo}>
        <Logo />
      </div>
      <nav className={classes.DesktopOnly}>
        <NavigationItems />
      </nav>
    </header>
  )
}

export default Toolbar
