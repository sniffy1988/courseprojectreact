import React, { Component } from "react";
import { SingleBook } from "../components";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";

import {
  getBook as getSingleBook,
  deleteBook
} from "../store/actions/BookActions";
import { getToken } from "../store/selectors/userSelectors";
import { getBook } from "../store/selectors/BooksSelectors";

class BookPage extends Component {
  componentDidMount() {
    const { token, getSingleBook, match } = this.props;
    getSingleBook(match.params.id, token);
  }
  handleEdit = isbn => {
    console.log(this.props);
  };

  handleDelete = isbn => {
    const { deleteBook, token, history } = this.props;
    deleteBook(isbn, token);
    history.push("/books");
  };

  render() {
    return (
      <div>
        <SingleBook
          book={this.props.book}
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
      book: getBook(state)
    };
  },
  dispatch => {
    return {
      getSingleBook: bindActionCreators(getSingleBook, dispatch),
      deleteBook: bindActionCreators(deleteBook, dispatch)
    };
  }
)(BookPage);
