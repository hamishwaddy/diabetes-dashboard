import React from 'react'

import classes from './sidePanel.module.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

const SidePanel = (props) => {
  return (
    <div className={classes.SidePanel}>
      <p>{props.Title}</p>
      <div>
        <FontAwesomeIcon
          className={classes.Icon}
          icon="chart-area" />  {/* To be deleted */}
        <div>
          {props.Graphic}
        </div>
      </div>
    </div>
  )
}

export default SidePanel
