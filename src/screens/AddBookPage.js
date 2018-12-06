import React, { Component } from "react";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";

import { AddBook } from "../components";
import { getToken } from "../store/selectors/userSelectors";
import { updateBook, addBook } from "../store/actions/BookActions";
import initialBook from "../constants/initialBook";

class AddBookPage extends Component {
  // In this component need to check if this add new book or we need to edit exists book
  isNewBook = () => {
    const { location } = this.props;
    return location.pathname.includes("/add-book");
  };

  handleBook = book => {
    const { updateBook, addBook, token } = this.props;
    return this.isNewBook() ? addBook(book, token) : updateBook(book, token);
  };

  render() {
    const { location } = this.props;
    return (
      <div>
        <AddBook
          isNew={this.isNewBook()}
          book={this.isNewBook() ? initialBook : location.state}
          handleBook={this.handleBook}
        />
      </div>
    );
  }
}

export default connect(
  state => {
    return {
      token: getToken(state)
    };
  },
  dispatch => {
    return {
      updateBook: bindActionCreators(updateBook, dispatch),
      getBook: bindActionCreators(addBook, dispatch)
    };
  }
)(AddBookPage);
