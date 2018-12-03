import React, { Component } from "react";
import { Formik } from "formik";
import * as Yup from "yup";
import { Link } from "react-router-dom";

import FormField from "./FormField";

//TODO: rework with formik
export default class ForgotPasswordForm extends Component {
  render() {
    return (
      <Formik
        initialValues={{
          email: "",
          password: ""
        }}
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
                name={"email"}
                id={"email"}
                type={"email"}
                text={"Email"}
                placeholder={"Email"}
                value={values.email}
                onChangeHandler={handleChange}
                onBlurHandler={handleBlur}
                error={errors.email}
              />
              <FormField
                name={"newPassword"}
                id={"newPassword"}
                type={"password"}
                text={"New Password"}
                placeholder={"New Password"}
                value={values.password}
                onChangeHandler={handleChange}
                onBlurHandler={handleBlur}
                error={errors.password}
              />
              <div className="field">
                <button className="ui button primary" type="submit">
                  {isSubmitting ? "Sending..." : "Reset Password"}
                </button>
              </div>
              <div className="ui segment">
                <Link className="floated left" to="/login">
                  Login
                </Link>
              </div>
              <div className="ui segment">
                <Link to="/sign-up">Sign Up</Link>
              </div>
            </form>
          );
        }}
      </Formik>
    );
  }
}
