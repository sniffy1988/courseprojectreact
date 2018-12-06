import React, { Component } from "react";
import PropTypes from "prop-types";
import { withRouter } from "react-router-dom";

import ErrorMessage from "./ErrorMessage";

class SingleBook extends Component {
  static propTypes = {
    book: PropTypes.object.isRequired,
    handeEdit: PropTypes.func.isRequired,
    handeDelete: PropTypes.func.isRequired,
    error: PropTypes.string
  };

  goBack = () => {
    this.props.history.goBack();
  };

  render() {
    const { book, handeEdit, handeDelete, error } = this.props;
    return (
      <div>
        <h1>{book.title}</h1>
        <h2>{book.subtitle}</h2>
        <h3>{book.author}</h3>
        <h4>{book.website}</h4>
        <p>Description:</p>
        <p>{book.description}</p>
        <p>ISBN:</p>
        <p>{book.isbn}</p>
        <p>Pages:</p>
        <p>{book.pages}</p>
        <p>Published:</p>
        <p>{new Date(book.published).toLocaleString()}</p>
        <p>Publisher:</p>
        <p>{book.publisher}</p>
        <div className={"ui buttons"}>
          <button
            className={"ui button blue"}
            onClick={() => handeEdit(book.isbn)}
          >
            Edit info
          </button>
          <button
            className={"ui button red"}
            onClick={() => handeDelete(book.isbn)}
          >
            Delete book
          </button>
          <button className='ui button green' onClick={this.goBack}>
            Go back
          </button>
        </div>
        <ErrorMessage error={error} />
      </div>
    );
  }
}

export default withRouter(SingleBook);
