import React, { Component } from "react";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { Link } from "react-router-dom";
import { withRouter } from "react-router-dom";

import { getProfile, userDelete } from "../store/actions/UserActions";
import {
  getUser,
  getUserId,
  getToken,
  getError
} from "../store/selectors/userSelectors";

class Profile extends Component {
  componentDidMount() {
    const { getProfile, userId, token } = this.props;
    getProfile({
      id: userId,
      token
    });
  }

  handleDelete = () => {
    const { userDelete, userId, history } = this.props;
    userDelete(userId, history);
  };
  render() {
    const { user, error } = this.props;
    const { firstName, lastName, email } = user;
    return (
      <div>
        <h2 className="header">{`${firstName} ${lastName}`}</h2>
        <div className="ui list">
          <div className="item">
            <b className="header">First Name:</b>
            <div className="decription">{firstName}</div>
          </div>
          <div className="item">
            <b className="header">Last Name:</b>
            <div className="description">{lastName}</div>
          </div>
          <div className="item">
            <b className="header">Email: </b>
            <div className="decription">{email}</div>
          </div>
          <div className="item">
            <Link to="/logout">Logout</Link>
          </div>
          <div className="item">
            <button className="ui button red" onClick={this.handleDelete}>
              Delete user
            </button>
          </div>
        </div>
        {error && (
          <div className="ui message error">
            <p>{error}</p>
          </div>
        )}
      </div>
    );
  }
}

export default withRouter(
  connect(
    state => {
      return {
        user: getUser(state),
        userId: getUserId(state),
        token: getToken(state),
        error: getError(state)
      };
    },
    dispatch => {
      return {
        getProfile: bindActionCreators(getProfile, dispatch),
        userDelete: bindActionCreators(userDelete, dispatch)
      };
    }
  )(Profile)
);
