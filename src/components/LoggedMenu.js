import React, { Component } from "react";
import { Link } from "react-router-dom";

export default class LoggedMenu extends Component {
  render() {
    return (
      <div className='right menu'>
        <Link to='/profile' className='item'>
          Profile
        </Link>
        <Link to='/books' className='item'>
          Books
        </Link>
        <Link to='/logout' className='item'>
          Logout
        </Link>
      </div>
    );
  }
}
