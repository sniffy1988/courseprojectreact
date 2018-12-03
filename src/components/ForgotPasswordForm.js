import React, { Component } from 'react'
//TODO: rework with formik
export default class ForgotPasswordForm extends Component {
  render() {
    return (
      <div className="ui form">
        <div className="field">
          <label htmlFor="email">Email</label>
          <input type="email" name="email" id="email" />
        </div>
        <div className="field">
          <label htmlFor="newPassword">New Password</label>
          <input type="password" name="newPassword" id="newPassword" />
        </div>
        <div className="field">
          <button className="ui button primary">Reset Password</button>
        </div>
      </div>
    )
  }
}
