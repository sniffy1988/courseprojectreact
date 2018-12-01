import React, { Component } from "react";
import { Link } from "react-router-dom";

export default class NotLoggedMenu extends Component {
  render() {
    return (
      <Link to='/login' className='item'>
        Login
      </Link>
    );
  }
}
