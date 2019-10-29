import React from 'react'
import DataSummary from './DataSummary/DataSummary'

import classes from './PatientProfileCard.module.css'

const PatientProfileCard = (props) => {
  return (
    <div className={classes.PatientProfileCard}>
      <div className={classes.Image}>
        <img src="https://robohash.org/set_set3/bgset_bg1/3.14159?size=200x200" alt="ProfilePicture"></img>
      </div>
      <div>
        <h4>Patient's name</h4>
      </div>
      <div>
        <DataSummary />
      </div>
    </div>
  )
}

export default PatientProfileCard
