import React, { Component } from "react";
import { Link } from "react-router-dom";
import { Formik } from "formik";
import * as Yup from "yup";

class LoginForm extends Component {
  render() {
    return (
      <>
        <Formik
          initialValues={{ email: "", password: "" }}
          validationSchema={Yup.object().shape({
            email: Yup.string()
              .email()
              .required("Required"),
              password: Yup.string().required("Required")
          })}
          onSubmit={(values, { setSubmitting }) => {
            setTimeout(() => {
              alert(JSON.stringify(values, null, 2));
              setSubmitting(false);
            }, 500);
          }}
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
                <div className='field'>
                  <label htmlFor='email'>Email</label>
                  <input
                    type='email'
                    name='email'
                    placeholder='Email'
                    value={values.email}
                    onChange={handleChange}
                    onBlur={handleBlur}
                  />
                  {errors.email && (
                    <div className='ui error message'>
                      <p>{errors.email}</p>
                    </div>
                  )}
                </div>
                <div className='field'>
                  <label htmlFor='password'>Password</label>
                  <input
                    type='password'
                    name='password'
                    placeholder='Password'
                    value={values.password}
                    onChange={handleChange}
                    onBlur={handleBlur}
                  />
                  {errors.password && (
                    <div className='ui error message'>
                      <p>{errors.password}</p>
                    </div>
                  )}
                </div>
                <div className='field'>
                  <button
                    className='ui button primary'
                    type='submit'
                    disabled={isSubmitting}
                  >
                    {isSubmitting ? "Logging In" : "Login"}
                  </button>
                </div>
              </form>
            );
          }}
        </Formik>
        <div className='ui segment'>
          <Link className='floated left' to='/reset-password'>
            Forgot Password?
          </Link>
        </div>
        <div className='ui segment'>
          <Link to='/sign-up'>Sign Up</Link>
        </div>
      </>
    );
  }
}

export default LoginForm;
