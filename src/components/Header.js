import React, { Component } from "react";
import { Link } from "react-router-dom";
import PropTypes, { object } from "prop-types";

export default class Header extends Component {
  static propTypes = {
    user: object.isRequired
  };
  render() {
    const isLogged = Object.keys(this.props.user).length !== 0;

    return (
      <div className='ui secondary pointing menu'>
        <Link className='item' to='/'>
          BookShelf
        </Link>
        <div className='right menu'>
          {isLogged && (
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
          )}
          {!isLogged && (
            <Link to='/login' className='item'>
              Login
            </Link>
          )}
        </div>
      </div>
    );
  }
}
