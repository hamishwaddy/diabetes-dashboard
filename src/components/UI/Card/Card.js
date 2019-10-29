import React from 'react'
import classes from './Card.module.css'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"

const Card = (props) => {
  return (
    <div className={classes.Card}>
      <div className={classes.CardHeader}>
        <FontAwesomeIcon
          className={classes.Icon}
          icon={props.Icon} />
        <p>{props.Title}</p>
      </div>
      <div className={classes.CardData}>
        <p>{props.Data}</p>
      </div>
    </div>
  )
}

export default Card
