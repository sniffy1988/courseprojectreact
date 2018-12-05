import React, { Component } from "react";

import { AddBook } from "../components";

class AddBookPage extends Component {
  // In this component need to check if this add new book or we need to edit exists book
  isNewBook = () => {
    const { location } = this.props;
    return location.pathname.includes("/new");
  };

  handleBook = () => {
    //
    const newBookHandler = () => {};
    const editBookHandler = () => {};
    return this.isNewBook() ? newBookHandler : editBookHandler;
  };

  render() {
    const { location } = this.props;
    return (
      <div>
        <AddBook
          isNew={this.isNewBook()}
          book={this.isNewBook() ? null : location.state}
          handleBook={this.handleBook}
        />
      </div>
    );
  }
}

export default AddBookPage;
