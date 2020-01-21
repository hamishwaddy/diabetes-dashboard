import React from 'react';

import classes from './SignInSignUpUser.module.css';
import SignInUser from '../../components/SignInUser/SignInUser';

const SignInSignUpUser = () => (
  <div className={classes.SignInSignUp}>
    <SignInUser />
  </div>
  );

  export default SignInSignUpUser;