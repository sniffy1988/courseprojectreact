import React, { Component } from "react";
import { Link } from "react-router-dom";
import { Formik } from "formik";
import * as Yup from "yup";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";

import FormField from "./FormField";
import { makeRegisterUser } from "../store/actions/UserActions";
import { getError } from "../store/selectors/userSelectors";

function equalTo(ref, msg) {
  return Yup.mixed().test({
    name: "equalTo",
    exclusive: false,
    // eslint-disable-next-line
    message: msg || "${path} must be the same as ${reference}",
    params: {
      reference: ref.path
    },
    test: function(value) {
      return value === this.resolve(ref);
    }
  });
}

Yup.addMethod(Yup.string, "equalTo", equalTo);

class RegisterForm extends Component {
  render() {
    return (
      <Formik
        initialValues={{
          firstName: "",
          lastName: "",
          email: "",
          password: "",
          confirmPassword: ""
        }}
        onSubmit={(values, { setSubmitting }) => {
          this.props.makeRegisterUser(values);
          setSubmitting(false);
        }}
        validationSchema={Yup.object().shape({
          firstName: Yup.string().required("Required"),
          lastName: Yup.string().required("Required"),
          email: Yup.string()
            .email()
            .required("Required"),
          password: Yup.string().required("Required"),
          confirmPassword: Yup.string()
            .equalTo(Yup.ref("password"), "Passwords does not matches")
            .required("Required")
        })}
      >
        {props => {
          const {
            values,
            errors,
            isSubmitting,
            handleChange,
            handleBlur,
            handleSubmit
          } = props;
          return (
            <form
              onSubmit={handleSubmit}
              className={`ui form ${errors ? "error" : ""}`}
            >
              <FormField
                text='First Name'
                name='firstName'
                id='firstName'
                error={errors.firstName}
                type='text'
                value={values.firstName}
                placeholder='First Name'
                onChangeHandler={handleChange}
                onBlurHandler={handleBlur}
              />
              <FormField
                text='Last Name'
                name='lastName'
                id='lastName'
                type='text'
                error={errors.lastName}
                value={values.lastName}
                placeholder='Last Name'
                onChangeHandler={handleChange}
                onBlurHandler={handleBlur}
              />
              <FormField
                text='Email'
                name='email'
                id='email'
                type='email'
                error={errors.email}
                value={values.email}
                placeholder='Email'
                onChangeHandler={handleChange}
                onBlurHandler={handleBlur}
              />
              <FormField
                text='Password'
                name='password'
                id='password'
                type='password'
                error={errors.password}
                value={values.password}
                placeholder='Password'
                onChangeHandler={handleChange}
                onBlurHandler={handleBlur}
              />
              <FormField
                text='Confirm Password'
                name='confirmPassword'
                id='confirmPassword'
                type='password'
                error={errors.confirmPassword}
                value={values.confirmPassword}
                placeholder='Confirm Password'
                onChangeHandler={handleChange}
                onBlurHandler={handleBlur}
              />
              {this.props.error && (
                <div className='ui error message'>
                  <p>{this.props.error}</p>
                </div>
              )}
              <div className='field'>
                <button className='ui button primary' type='submit'>
                  {isSubmitting ? "Registering..." : "Sign up"}
                </button>
              </div>
              <div className='ui segment'>
                <Link to='/reset-password'>Forgot Password?</Link>
              </div>
              <div className='ui segment'>
                <Link to='/login'>Log in</Link>
              </div>
            </form>
          );
        }}
      </Formik>
    );
  }
}

export default connect(
  state => {
    return {
      error: getError(state)
    };
  },
  dispatch => {
    return { makeRegisterUser: bindActionCreators(makeRegisterUser, dispatch) };
  }
)(RegisterForm);
