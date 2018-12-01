import React, { Component } from "react";
import { Link } from "react-router-dom";

export default class LoginForm extends Component {
  render() {
    return (
      <div className='ui form'>
        <div className='field'>
          <label htmlFor='email'>Email</label>
          <input type='email' name='email' placeholder='Email' />
        </div>
        <div className='field'>
          <label htmlFor='password'>Password</label>
          <input type='password' name='password' placeholder='Password' />
        </div>
        <div className='field'>
          <button className='ui button primary'>Login</button>
        </div>
        <div className='ui segment'>
          <Link className='floated left' to='/reset-password'>
            Forgot Password?
          </Link>
        </div>
        <div className='ui segment'>
          <Link to='/sign-up'>Sign Up</Link>
        </div>
      </div>
    );
  }
}
