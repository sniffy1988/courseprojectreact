import React, { Component } from "react";
import PropTypes from "prop-types";

class FormField extends Component {
  static propTypes = {
    text: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    error: PropTypes.string,
    id: PropTypes.string.isRequired,
    type: PropTypes.string.isRequired,
    onChangeHandler: PropTypes.func.isRequired,
    onBlurHandler: PropTypes.func.isRequired,
    placeholder: PropTypes.string.isRequired,
    value: PropTypes.any.isRequired
  };

  render() {
    const {
      text,
      name,
      error,
      id,
      type,
      onChangeHandler,
      onBlurHandler,
      placeholder,
      value
    } = this.props;
    return (
      <div className="field">
        <label htmlFor={id}>{text}</label>
        <input
          type={type}
          name={name}
          id={id}
          value={value}
          onChange={onChangeHandler}
          onBlur={onBlurHandler}
          placeholder={placeholder}
        />
        {error && (
          <div className="ui error message">
            <p>{error}</p>
          </div>
        )}
      </div>
    );
  }
}

export default FormField;
