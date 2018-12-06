import React, { Component } from "react";
import PropTypes from "prop-types";

export default class ErrorComponent extends Component {
  static propTypes = {
    error: PropTypes.string
  };
  render() {
    const { error } = this.props;
    return error ? (
      <div className='ui message error'>{this.props.error}</div>
    ) : (
      <></>
    );
  }
}
