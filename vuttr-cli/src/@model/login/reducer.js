// @flow

import { storage } from '@http/storage';

import {
  LOGIN_PENDING,
  LOGIN_SUCCESS,
  LOGIN_FAILURE
} from './actionTypes';

function loginReducer(state = { loading: false }, action) {

  const user = storage.content().user;

  switch (action.type) {
    case LOGIN_PENDING:
      return {
        ...state,
        user,
        loading: true
      }
    case LOGIN_SUCCESS:
      return {
        ...state,
        user,
        loading: false
      }
    case LOGIN_FAILURE:
      return {
        ...state,
        loading: false
      }
    default:
      return { ...state, user }
  }
}

export { loginReducer };
