import axios from "axios";

import { API_URL } from "../../constants";
import booksdata from "../../constants/fakebooks";
import bookdata from "../../constants/fakebook";

export const BOOK_REQUEST = "books/BOOK_REQUEST";
export const BOOK_REQUEST_SUCCESS = "books/BOOK_REQUEST_SUCCESS";
export const BOOK_REQUEST_FAILED = "books/BOOK_REQUEST_FAILED";
export const SINGLE_BOOK_REQUEST = "books/SINGLE_BOOK_REQUEST";
export const SINGLE_BOOK_REQUEST_SUCCESS = "books/SINGLE_BOOK_REQUEST_SUCCESS";
export const SINGLE_BOOK_REQUEST_FAILED = "books/SINGLE_BOOK_REQUEST_FAILED";
export const SINGLE_BOOK_UPDATE = "books/SINGE_BOOK_UPDATE";
export const SINGLE_BOOK_UPDATE_SUCCESS = "books/SINGLE_BOOK_UPDATE_SUCCESS";
export const SINGLE_BOOK_UPDATE_FAILED = "books/SINGLE_BOOK_UPDATE_FAILED";
export const SINGLE_BOOK_DELETE = "books/SINGLE_BOOK_DELETE";
export const SINGLE_BOOK_DELETE_SUCCESS = "books/SINGLE_BOOK_DELETE_SUCCESS";
export const SINGLE_BOOK_DELETE_FAILED = "books/SINGLE_BOOK_DELETE_FAILED";
export const SINGLE_BOOK_ADD = "books/SINGLE_BOOK_ADD";
export const SINGLE_BOOK_ADD_SUCCESS = "books/SINGLE_BOOK_ADD_SUCCESS";
export const SINGLE_BOOK_ADD_FAILED = "books/SINGLE_BOOK_ADD_FAILED";

export const getBooks = token => async dispatch => {
  dispatch({
    type: BOOK_REQUEST
  });

  try {
    // const { data } = await axios.get(`${API_URL}/books`, {
    //   headers: {
    //     token
    //   }
    // });
    const data = booksdata;
    dispatch({
      type: BOOK_REQUEST_SUCCESS,
      payload: data
    });
  } catch (e) {
    dispatch({
      type: BOOK_REQUEST_FAILED,
      payload: e.message
    });
  }
};

export const getBook = (isbn, token) => async dispatch => {
  dispatch({
    type: SINGLE_BOOK_REQUEST
  });
  try {
    // const { data } = await axios.get(`${API_URL}/books/${isbn}`, {
    //   headers: { token }
    // });

    const data = bookdata;

    dispatch({
      type: SINGLE_BOOK_REQUEST_SUCCESS,
      payload: data
    });
  } catch (e) {
    dispatch({
      type: SINGLE_BOOK_REQUEST_FAILED,
      payload: e.message
    });
  }
};

export const deleteBook = (isbn, token) => async dispatch => {
  dispatch({
    type: SINGLE_BOOK_DELETE
  });
  try {
    // const { data } = await axios.delete(`${API_URL}/books/${isbn}`, {
    //   headers: { token }
    // });

    dispatch({
      type: SINGLE_BOOK_DELETE_SUCCESS
    });

    getBooks(token);
  } catch (error) {
    dispatch({
      type: SINGLE_BOOK_DELETE_FAILED,
      payload: error.message
    });
  }
};

export const updateBook = (book, token) => async dispatch => {
  dispatch({
    type: SINGLE_BOOK_UPDATE
  });

  try {
    axios.put(`${API_URL}/books/${book.isbn}`, book, {
      headers: {
        token
      }
    });

    dispatch({
      type: SINGLE_BOOK_UPDATE_SUCCESS,
      payload: book
    });
  } catch (error) {
    dispatch({
      type: SINGLE_BOOK_UPDATE_FAILED,
      error: error.message
    });
  }
};
