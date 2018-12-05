import { combineReducers } from "redux";

import UserReducer from "./UserReducer";
import BooksReducer from "./BooksReducer";

export default combineReducers({
  UserReducer,
  BooksReducer
});
