import React from 'react';

import classes from './CustomButton.module.css'

const CustomButton = ({ children, isGoogleSignIn, ...otherProps }) => (
  <button 
    className={classes.CustomButton} {...otherProps}
  >
    {children}
  </button>
);

export default CustomButton;
