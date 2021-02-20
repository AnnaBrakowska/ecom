import React from 'react'
import './sign-in-login.styles.scss'
import Signin from '../../components/signin/signin.component'
import Signup from '../../components/signup/signup.component'


export const SigninLogin = () => (
  <div className="signinlogin">
    <Signin />
    <Signup />
  </div>
)