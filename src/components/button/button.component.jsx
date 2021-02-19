import React from 'react'
import './button.styles.scss'

export const Button = ({children, ...props}) => (
  <button className="button" {...props}>{children}</button>
)