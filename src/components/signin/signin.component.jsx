import React from 'react'
import './signin.styles.scss'
import { FormInput } from '../form-input/form-input.component'
import { Button } from '../button/button.component'

class Signin extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      email: '',
      password: ''
    }
  }

  handleSubmit = e => {
    e.preventDefault()
    this.setState({email: '', password: ''})
  }

  handleChange = e => {
    const { value, name } = e.target
    this.setState({[name]: value})
  }

  render() {
    return (
      <div className="sign-in">
        <h2>I already have an account</h2>
        <span>Sign in with your email and password</span>

        <form onSubmit={this.handleSubmit}>
          <FormInput handleChange={this.handleChange} required value={this.state.email} name="email" label="Email" type="email"/>
          <FormInput name="password" value={this.state.password} required onChange={this.handleChange} label="Password" type="password"/>
          <Button type="submit">Sign in</Button>
        </form>
      </div>
    )
  }
}

export default Signin