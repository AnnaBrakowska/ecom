import React from 'react'
import './form-input.styles.scss'

export const FormInput = ({ handleChange, label, ...props }) => (
  <div className="form-group">
      <input className="form-group__input" onChange={handleChange} />
      {label && (
        <label className={`form-group__label ${props.value.length ? 'form-group__label--shrink': ''}`}>{label}</label>
      )}
  </div>
)
