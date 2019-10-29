import React from 'react'

import classes from './Logo.module.css'
import iDotLogo from '../../assets/images/iDotLogo-shadow.png'

const Logo = (props) => {
  return (
    <div className={classes.Logo}>
      <img src={iDotLogo} alt="iDotTracker Logo" />
    </div>
  )
}

export default Logo
