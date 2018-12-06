import React, { Component } from "react";
import PropTypes from "prop-types";
import { Formik } from "formik";
import * as Yup from "yup";
import { withRouter } from "react-router-dom";

import { FormField } from "../components";

class AddBook extends Component {
  static propTypes = {
    isNew: PropTypes.bool.isRequired,
    handleBook: PropTypes.func.isRequired,
    book: PropTypes.object.isRequired
  };
  backHandler = e => {
    e.preventDefault();
    const { history } = this.props;
    history.goBack();
  };

  render() {
    const { book } = this.props;

    return (
      <div>
        <Formik
          initialValues={book}
          onSubmit={(values, { setSubmitting }) => {
            const { handleBook, history } = this.props;
            handleBook(values);
            setSubmitting(false);
          }}
          validationSchema={Yup.object().shape({
            isbn: Yup.string().required("Required"),
            title: Yup.string().required("Required"),
            subtitle: Yup.string().required("Required"),
            author: Yup.string().required("Required"),
            description: Yup.string().required("Required"),
            pages: Yup.number().required("Required"),
            publisher: Yup.string().required("Required"),
            website: Yup.string().required("Required"),
            published: Yup.date().required("Required")
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
                className={`ui form ${errors ? "error" : ""}`}
                onSubmit={handleSubmit}
              >
                <FormField
                  text='ISBN'
                  name='isbn'
                  type='text'
                  id='isbn'
                  placeholder='ISBN'
                  value={values.isbn}
                  error={errors.isbn}
                  onChangeHandler={handleChange}
                  onBlurHandler={handleBlur}
                />
                <FormField
                  text='Title'
                  name='title'
                  type='text'
                  id='title'
                  placeholder='Title'
                  value={values.title}
                  error={errors.title}
                  onChangeHandler={handleChange}
                  onBlurHandler={handleBlur}
                />
                <FormField
                  text='Subtitle'
                  name='Subtitle'
                  type='text'
                  id='subtitle'
                  placeholder='Subtitle'
                  value={values.subtitle}
                  error={errors.subtitle}
                  onChangeHandler={handleChange}
                  onBlurHandler={handleBlur}
                />
                <FormField
                  text='Author'
                  name='author'
                  type='text'
                  id='author'
                  placeholder='Author'
                  value={values.author}
                  error={errors.author}
                  onChangeHandler={handleChange}
                  onBlurHandler={handleBlur}
                />
                <FormField
                  text='Description'
                  name='description'
                  type='text'
                  id='description'
                  placeholder='Description'
                  value={values.description}
                  error={errors.description}
                  onChangeHandler={handleChange}
                  onBlurHandler={handleBlur}
                />
                <FormField
                  text='Pages'
                  name='pages'
                  type='number'
                  id='pages'
                  placeholder='Pages'
                  value={values.pages}
                  error={errors.pages}
                  onChangeHandler={handleChange}
                  onBlurHandler={handleBlur}
                />
                <FormField
                  text='Publisher'
                  name='publisher'
                  type='text'
                  id='publisher'
                  placeholder='Publisher'
                  value={values.publisher}
                  error={errors.publisher}
                  onChangeHandler={handleChange}
                  onBlurHandler={handleBlur}
                />
                <FormField
                  text='Website'
                  name='website'
                  type='url'
                  id='website'
                  placeholder='Website'
                  value={values.website}
                  error={errors.website}
                  onChangeHandler={handleChange}
                  onBlurHandler={handleBlur}
                />
                <FormField
                  text='Published'
                  name='published'
                  type='text'
                  id='published'
                  placeholder='Published'
                  value={values.published}
                  error={errors.published}
                  onChangeHandler={handleChange}
                  onBlurHandler={handleBlur}
                />
                <div className='ui buttons'>
                  <button
                    type='submit'
                    disable={isSubmitting.toString()}
                    className='ui button blue'
                  >
                    {isSubmitting ? "Sending..." : "Submit"}
                  </button>
                  <a href='/' onClick={this.backHandler} className='ui button'>
                    Back
                  </a>
                </div>
              </form>
            );
          }}
        </Formik>
      </div>
    );
  }
}

export default withRouter(AddBook);
