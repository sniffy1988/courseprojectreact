import {
  USER_REQUEST,
  USER_REQUEST_SUCCESS,
  USER_REQUEST_FAILED,
  USER_REGISTER,
  USER_REGISTER_SUCCESS,
  USER_REGISTER_FAILED
} from "../actions/UserActions";

const initialState = {
  user: {},
  isLoading: false,
  error: ""
};
export default (state = initialState, action) => {
  switch (action.type) {
    case USER_REQUEST:
      return {
        ...state,
        isLoading: true,
        error: ""
      };
    case USER_REQUEST_SUCCESS:
      return {
        ...state,
        user: action.payload,
        isLoading: false,
        error: ""
      };
    case USER_REQUEST_FAILED:
      return {
        ...state,
        isLoading: false,
        error: action.payload
      };
    case USER_REGISTER:
      return {
        ...state,
        isLoading: true
      };
    case USER_REGISTER_SUCCESS:
      return {
        ...state,
        isLoading: false,
        user: action.payload,
        error: ""
      };
    case USER_REGISTER_FAILED:
      return {
        ...state,
        isLoading: false,
        error: ""
      };
    default:
      return state;
  }
};
