import React, { Component } from "react";
import { Link } from "react-router-dom";
import { object } from "prop-types";

import withAuth from "../HOCs/withAuth";
import LoggedMenu from "./LoggedMenu";
import NotLoggedMenu from "./NotLoggedMenu";

export default class Header extends Component {
  static propTypes = {
    user: object.isRequired
  };
  render() {
    const { user } = this.props;

    return (
      <div className='ui secondary pointing menu'>
        <Link className='item' to='/'>
          BookShelf
        </Link>
        <div className='right menu'>
          {withAuth(LoggedMenu, NotLoggedMenu, user)}
        </div>
      </div>
    );
  }
}
