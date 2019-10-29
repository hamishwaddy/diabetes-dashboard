import React from 'react'

import classes from './DataSummary.module.css'

const DataSummary = (props) => {
  return (
    <div className={classes.DataSummary}>
      <div>
        <h6>WEIGHT</h6>
        <p>24kg</p>
      </div>
      <div>
        <h6>CURRENT BG</h6>
        <p>8.5mmol</p>
      </div>
      <div>
        <h6>HBA1C</h6>
        <p>56</p>
      </div>
    </div>
  )
}

export default DataSummary
