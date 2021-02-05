import { combineReducers } from "redux";
import { reducer as formReducer } from 'redux-form';

import authReducer from "./authReducers";
import talkReducer from "./talkReducers";

export default combineReducers( {
  auth: authReducer,
  form: formReducer,
  talks: talkReducer,
});
