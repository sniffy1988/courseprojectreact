import React, { Component } from "react";
import { SingleBook } from "../components";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";

import {
  getBook as getSingleBook,
  deleteBook
} from "../store/actions/BookActions";
import { getToken } from "../store/selectors/userSelectors";
import { getBook, getError } from "../store/selectors/BooksSelectors";

class BookPage extends Component {
  componentDidMount() {
    const { token, getSingleBook, match } = this.props;
    getSingleBook(match.params.id, token);
  }
  handleEdit = isbn => {
    const { history, book } = this.props;
    history.push(`/books/${isbn}/edit`, book);
  };

  handleDelete = isbn => {
    const { deleteBook, token, history, error } = this.props;
    if (error === "") {
      deleteBook(isbn, token);
    }
    if (error !== "") {
      history.push("/books");
    }
  };

  render() {
    return (
      <div>
        <SingleBook
          book={this.props.book}
          error={this.props.error}
          handeEdit={this.handleEdit}
          handeDelete={this.handleDelete}
        />
      </div>
    );
  }
}

export default connect(
  state => {
    return {
      token: getToken(state),
      book: getBook(state),
      error: getError(state)
    };
  },
  dispatch => {
    return {
      getSingleBook: bindActionCreators(getSingleBook, dispatch),
      deleteBook: bindActionCreators(deleteBook, dispatch)
    };
  }
)(BookPage);
