import {
  BOOK_REQUEST,
  BOOK_REQUEST_SUCCESS,
  BOOK_REQUEST_FAILED,
  SINGLE_BOOK_REQUEST,
  SINGLE_BOOK_REQUEST_SUCCESS,
  SINGLE_BOOK_REQUEST_FAILED
} from "../actions/BookActions";

const initialState = {
  books: [],
  currentBook: {},
  isLoading: false,
  error: ""
};
export default (state = initialState, action) => {
  switch (action.type) {
    case BOOK_REQUEST:
      return {
        ...state,
        isLoading: true,
        error: ""
      };
    case BOOK_REQUEST_SUCCESS:
      return {
        ...state,
        isLoading: false,
        books: action.payload,
        error: ""
      };
    case BOOK_REQUEST_FAILED:
      return {
        ...state,
        isLoading: false,
        error: action.payload
      };
    case SINGLE_BOOK_REQUEST:
      return {
        ...state,
        isLoading: true,
        currentBook: {},
        error: ""
      };
    case SINGLE_BOOK_REQUEST_SUCCESS:
      return {
        ...state,
        currentBook: action.payload,
        isLoading: false,
        error: ""
      };
    case SINGLE_BOOK_REQUEST_FAILED:
      return {
        ...state,
        isLoading: false,
        error: action.payload
      };
    default:
      return state;
  }
};
