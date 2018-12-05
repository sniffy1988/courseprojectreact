import {
  BOOK_REQUEST,
  BOOK_REQUEST_SUCCESS,
  BOOK_REQUEST_FAILED
} from "../actions/BookActions";

const initialState = {
  books: [],
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
    default:
      return state;
  }
};
