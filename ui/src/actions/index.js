import talks from "../api/talks";
import { SIGN_IN, SIGN_OUT, LIST_TALKS, GET_TALK, SEARCH_TALKS } from "./types";

export const signIn = (userId, name, email, jwt) => {
  return ({
    type: SIGN_IN,
    payload: {
      userId: userId,
      name: name,
      email: email,
      jwt: jwt
    }
  });
};

export const signOut = () => {
  return ({
    type: SIGN_OUT,
    payload: {
      userId: null,
      name: '',
      email: '',
      jwt: ''
    }
  });
}

export const listTalks = () => async dispatch => {
  const response = await talks.get('/talks');
  dispatch({type: LIST_TALKS, payload: response.data});
}

export const getTalk = (id) => async dispatch => {
  const response = await talks.get(`/talks/${id}`);
  dispatch({type: GET_TALK, payload: response.data });
}

export const searchTalks = (term) => {
  return({type: SEARCH_TALKS, payload: term });
}
