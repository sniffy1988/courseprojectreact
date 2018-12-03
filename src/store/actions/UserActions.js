import axios from "axios";

import { API_URL } from "../../constants";

export const USER_REQUEST = "user/AUTH_REQUEST";
export const USER_REQUEST_SUCCESS = "user/USER_SUCCESS";
export const USER_REQUEST_FAILED = "user/USER_FAILED";
export const USER_REGISTER = "user/REGISTER_REQUEST";
export const USER_REGISTER_SUCCESS = "user/USER_REGISTER_SUCCESS";
export const USER_REGISTER_FAILED = "user/USER_REGISTER_FAILED";

// TODO: mock data calls to login/register;
export const makeLogin = ({ email, password }) => async dispatch => {
  dispatch({
    type: USER_REQUEST
  });
  //make call to server
  try {
    const { data } = await axios.post(`${API_URL}/login`, {
      email,
      password
    });

    dispatch({
      type: USER_REQUEST_SUCCESS,
      payload: data
    });
  } catch (error) {
    dispatch({
      type: USER_REQUEST_FAILED,
      payload: error.message
    });
  }
};

export const makeRegisterUser = values => async dispatch => {
  console.log(values);
  dispatch({
    type: USER_REGISTER
  });

  try {
    const { data } = await axios.post(`${API_URL}/signup`, values);
    dispatch({
      type: USER_REGISTER_SUCCESS,
      payload: data
    });
  } catch (error) {
    dispatch({
      type: USER_REGISTER_FAILED,
      payload: error.message
    });
  }
};
