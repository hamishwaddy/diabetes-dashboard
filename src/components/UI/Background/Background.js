import React from 'react'

import classes from './Background.module.css'

const Background = (props) => {
  return (
    <div className={classes.Background}>
      <div className={classes.White}></div>
      <div className={classes.Red}></div>
    </div>
  )
}

export default Background
