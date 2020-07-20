import { takeLatest, put, call } from 'redux-saga/effects';
import { toast } from 'react-toastify';

import { createUser } from '../service';
import {
  CREATE_USER,
  CREATE_USER_PENDING,
  CREATE_USER_SUCCESS,
  CREATE_USER_FAILURE
} from '../actionTypes';


function* sagaCreateUser(action) {
  yield put({ type: CREATE_USER_PENDING })

  try {

    const newOid = yield call(createUser, action.data);

    yield put({ type: CREATE_USER_SUCCESS, oid: newOid });

    toast('Success!', { type: 'success', position: 'top-right' });

  } catch (error) {
    yield put({ type: CREATE_USER_FAILURE })

    toast('Error!', { type: 'error', position: 'top-right' });
  }

}

export default function* watchCreateUser() {
  yield takeLatest(CREATE_USER, sagaCreateUser)
}
