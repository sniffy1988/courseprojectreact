import React, { Component } from "react";
import { Books } from "../components";

export default class BooksPage extends Component {
  addBookHandler = () => {
    const { history } = this.props;
    history.push("/add-book");
  };
  render() {
    return (
      <div>
        <button onClick={this.addBookHandler} className='ui button green'>
          Add book
        </button>
        <Books />
      </div>
    );
  }
}
