import React, { Component } from 'react'
import { Link } from 'react-router-dom'
//TODO: rework with formik
export default class RegisterForm extends Component {
  render() {
    return (
      <div className="ui form">
        <div className="field">
          <label htmlFor="firstName">First Name</label>
          <input type="text" name="firstName" id="firstName" />
        </div>
        <div className="field">
          <label htmlFor="lastName">Last Name</label>
          <input type="text" name="lastName" id="lastName" />
        </div>
        <div className="field">
          <label htmlFor="email">Email</label>
          <input type="email" name="email" id="email" />
        </div>
        <div className="field">
          <label htmlFor="password">Password</label>
          <input type="password" name="password" id="password" />
        </div>
        <div className="field">
          <label htmlFor="confirmPassword">Confirm password</label>
          <input type="password" name="confirmPassword" id="confirmPassword" />
        </div>
        <div className="field">
          <button className="ui button primary">Sign up</button>
        </div>
        <div className="ui segment">
          <Link to="/reset-password">Forgot Password?</Link>
        </div>
        <div className="ui segment">
          <Link to="/login">Log in</Link>
        </div>
      </div>
    )
  }
}
