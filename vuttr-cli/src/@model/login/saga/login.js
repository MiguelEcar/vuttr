import { takeLatest, put, call } from 'redux-saga/effects'
import { toast } from 'react-toastify';

import { httpAuthService } from '@http';
import { path } from '@http/path';

import {
  LOGIN,
  LOGIN_PENDING,
  LOGIN_SUCCESS,
  LOGIN_FAILURE
} from '../actionTypes';

const login = async ({ dominio, email, password }) => {
  await httpAuthService.login(path, { dominio, email, password });
}


function* sagaLogin(action) {
  yield put({ type: LOGIN_PENDING })

  try {

    const newLogin = yield call(login, action.data);

    yield put({ type: LOGIN_SUCCESS, login: newLogin });

    toast('Welcome!', { type: 'success', position: 'top-right' });

  } catch (error) {
    yield put({ type: LOGIN_FAILURE });

    toast(error.text, { type: 'error', position: 'top-right' });
  }

}

export default function* watchLogin() {
  yield takeLatest(LOGIN, sagaLogin);
}
