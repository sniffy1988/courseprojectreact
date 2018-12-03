import React, { Component } from "react";
import { Link } from "react-router-dom";
import { Formik } from "formik";
import * as Yup from "yup";

import FormField from "./FormField";

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
                <FormField
                  type="email"
                  text="Email"
                  name="email"
                  id="email"
                  placeholder={"Email"}
                  onChangeHandler={handleChange}
                  onBlurHandler={handleBlur}
                  error={errors.email}
                  value={values.email}
                />
                <FormField
                  type="password"
                  text="Password"
                  name="password"
                  id="password"
                  placeholder={"Password"}
                  onChangeHandler={handleChange}
                  onBlurHandler={handleBlur}
                  error={errors.password}
                  value={values.password}
                />
                <div className="field">
                  <button
                    className="ui button primary"
                    type="submit"
                    disabled={isSubmitting}
                  >
                    {isSubmitting ? "Logging In" : "Login"}
                  </button>
                </div>
              </form>
            );
          }}
        </Formik>
        <div className="ui segment">
          <Link className="floated left" to="/reset-password">
            Forgot Password?
          </Link>
        </div>
        <div className="ui segment">
          <Link to="/sign-up">Sign Up</Link>
        </div>
      </>
    );
  }
}

export default LoginForm;
