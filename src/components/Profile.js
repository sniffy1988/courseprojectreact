import React, { Component } from "react";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";

import { getProfile } from "../store/actions/UserActions";
import { getUser, getUserId, getToken } from "../store/selectors/userSelectors";

class Profile extends Component {
  componentDidMount() {
    const { getProfile, userId, token } = this.props;
    getProfile({
      id: userId,
      token
    });
  }
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
    return {
      user: getUser(state),
      userId: getUserId(state),
      token: getToken(state)
    };
  },
  dispatch => {
    return { getProfile: bindActionCreators(getProfile, dispatch) };
  }
)(Profile);
