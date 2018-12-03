import axios from "axios";

import { API_URL } from "../../constants";

export const USER_REQUEST = "user/AUTH_REQUEST";
export const USER_REQUEST_SUCCESS = "user/USER_SUCCESS";
export const USER_REQUEST_FAILED = "user/USER_FAILED";
export const USER_REGISTER = "user/REGISTER_REQUEST";
export const USER_REGISTER_SUCCESS = "user/USER_REGISTER_SUCCESS";
export const USER_REGISTER_FAILED = "user/USER_REGISTER_FAILED";
export const PROFILE_REQUEST = "user/PROFILE_REQUEST";
export const PROFILE_REQUEST_SUCCESS = "user/PROFILE_REQUEST_SUCCESS";
export const PROFILE_REQUEST_FAILED = "user/PROFILE_REQUEST_FAILED";

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

export const getProfile = ({ id, token }) => async dispatch => {
  dispatch({
    type: PROFILE_REQUEST
  });

  //make profile call

  try {
    const { data } = await axios.get(`${API_URL}/${id}`, {
      token,
      id
    });
    dispatch({
      type: PROFILE_REQUEST_SUCCESS,
      payload: data
    });
  } catch (error) {
    dispatch({
      type: PROFILE_REQUEST_FAILED,
      payload: error.message
    });
  }
};
