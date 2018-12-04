import {
  USER_REQUEST,
  USER_REQUEST_SUCCESS,
  USER_REQUEST_FAILED,
  USER_REGISTER,
  USER_REGISTER_SUCCESS,
  USER_REGISTER_FAILED,
  PROFILE_REQUEST,
  PROFILE_REQUEST_SUCCESS,
  PROFILE_REQUEST_FAILED,
  USER_LOGOUT,
  USER_DELETE,
  USER_DELETE_SUCCESS,
  USER_DELETE_FAILED
} from "../actions/UserActions";

const initialState = {
  user: {},
  token: "",
  userId: 0,
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
        token: action.payload.token,
        userId: action.payload.userId,
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
        token: action.payload.token,
        userId: action.payload.userId,
        error: ""
      };
    case USER_REGISTER_FAILED:
      return {
        ...state,
        isLoading: false,
        error: ""
      };
    case PROFILE_REQUEST:
      return {
        ...state,
        isLoading: true
      };
    case PROFILE_REQUEST_SUCCESS:
      return {
        ...state,
        isLoading: false,
        error: "",
        user: action.payload
      };
    case PROFILE_REQUEST_FAILED:
      return {
        ...state,
        isLoading: false,
        error: action.payload
      };
    case USER_LOGOUT:
      return initialState;
    case USER_DELETE:
      return {
        ...state,
        isLoading: true
      };
    case USER_DELETE_SUCCESS:
      return {
        ...state,
        isLoading: false
      };
    case USER_DELETE_FAILED:
      return {
        ...state,
        error: action.payload
      };
    default:
      return state;
  }
};
