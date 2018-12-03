import {
  USER_REQUEST,
  USER_REQUEST_SUCCESS,
  USER_REQUEST_FAILED
} from "../actions/UserActions";

const initialState = {
  user: {
    firstName: "Anton",
    lastName: "Lobodenko",
    email: "sniffy1988@gmail.com"
  },
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
    default:
      return state;
  }
};
