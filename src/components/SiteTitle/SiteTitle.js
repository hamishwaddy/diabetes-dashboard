import React from 'react'

import classes from './SiteTitle.module.css'

const SiteTitle = (props) => {
  return (
    <div className={classes.SiteTitle}>
      <h1>{props.title}</h1>
      <h4>{props.date}</h4>
    </div>
  )
}

export default SiteTitle
