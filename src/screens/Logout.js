import React, { Component } from "react";
import { withRouter } from "react-router-dom";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";

import { makeLogout } from "../store/actions/UserActions";

class Logout extends Component {
  componentDidMount() {
    const { makeLogout, history } = this.props;
    makeLogout();
    history.push("/login");
  }

  render() {
    return <div />;
  }
}

export default withRouter(
  connect(
    null,
    dispatch => {
      return {
        makeLogout: bindActionCreators(makeLogout, dispatch)
      };
    }
  )(Logout)
);
