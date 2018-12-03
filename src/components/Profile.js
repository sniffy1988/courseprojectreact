import React, { Component } from "react";
import { connect } from "react-redux";

import { getUser } from "../store/selectors/userSelectors";

class Profile extends Component {
  render() {
    const { user } = this.props;
    const { firstName, lastName, email } = user;
    return (
      <div className='ui card'>
        <div className='content'>
          <span className='header'>{`${firstName} ${lastName}`}</span>
          <div className='meta'>
            <span className='date'>{email}</span>
          </div>
          <div className='description'>It's your account info</div>
        </div>
      </div>
    );
  }
}

export default connect(
  state => {
    return { user: getUser(state) };
  },
  null
)(Profile);
