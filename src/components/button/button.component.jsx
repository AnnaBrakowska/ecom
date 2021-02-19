import React from 'react'
import './button.styles.scss'

export const Button = ({children, isGoogleSignIn, ...props}) => (
  <button className={`button ${isGoogleSignIn && 'button--google'}`} {...props}>{children}</button>
)