import React, { Component } from "react";
import PropTypes from "prop-types";
import { withRouter } from "react-router-dom";

class BooksItem extends Component {
  static propTypes = {
    book: PropTypes.object.isRequired
  };

  handleClick = isbn => {
    this.props.history.push(`/books/${isbn}`);
  };

  render() {
    const { book } = this.props;
    return (
      <div className='card' onClick={() => this.handleClick(book.isbn)}>
        <div className='content'>
          <div className='header'>{book.title}</div>
          <div className='meta'>{book.subtitle}</div>
          <div className='description'>{book.author}</div>
        </div>
      </div>
    );
  }
}

export default withRouter(BooksItem);
