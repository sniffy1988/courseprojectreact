import React, { Component } from "react";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";

import { getBooksSelector, getError } from "../store/selectors/BooksSelectors";
import { getBooks } from "../store/actions/BookActions";
import { getToken } from "../store/selectors/userSelectors";

import BooksItem from "./BooksItem";
import ErrorMessage from "./ErrorMessage";

class Books extends Component {
  componentDidMount() {
    const { token, getBooks } = this.props;
    getBooks(token);
  }

  render() {
    const { books, error } = this.props;
    return (
      <div className={"ui link cards"}>
        {books.map(book => (
          <BooksItem key={book.isbn} book={book} />
        ))}
        <ErrorMessage error={error} />
      </div>
    );
  }
}

export default connect(
  state => {
    return {
      books: getBooksSelector(state),
      token: getToken(state),
      error: getError(state)
    };
  },
  dispatch => {
    return {
      getBooks: bindActionCreators(getBooks, dispatch)
    };
  }
)(Books);
