import React, { Component } from "react";
import { Link } from "react-router-dom";
import { number } from "prop-types";

import withAuth from "../HOCs/withAuth";
import LoggedMenu from "./LoggedMenu";
import NotLoggedMenu from "./NotLoggedMenu";

export default class Header extends Component {
  static propTypes = {
    userId: number.isRequired
  };
  render() {
    const { userId } = this.props;

    return (
      <div className='ui secondary pointing menu'>
        <Link className='item' to='/'>
          BookShelf
        </Link>
        <div className='right menu'>
          {withAuth(LoggedMenu, NotLoggedMenu, userId)}
        </div>
      </div>
    );
  }
}
