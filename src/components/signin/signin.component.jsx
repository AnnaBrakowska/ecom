import React from 'react'
import './signin.styles.scss'
import { FormInput } from '../form-input/form-input.component'
import { Button } from '../button/button.component'

import {signInWithGoogle} from '../../firebase/firebase.utils'


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
        <h2 className="sign-in__title">I already have an account</h2>
        <span>Sign in with your email and password</span>

        <form onSubmit={this.handleSubmit}>
          <FormInput handleChange={this.handleChange} required value={this.state.email} name="email" label="Email" type="email"/>
          <FormInput name="password" value={this.state.password} required onChange={this.handleChange} label="Password" type="password"/>
          <div className="sign-in__buttons">
            <Button type="submit">Sign in</Button>
            <Button isGoogleSignIn onClick={signInWithGoogle}>Sign in with google</Button>
          </div>
        </form>
      </div>
    )
  }
}

export default Signin