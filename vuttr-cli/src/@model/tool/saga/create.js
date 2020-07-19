import { takeLatest, put, call } from 'redux-saga/effects';
import { toast } from 'react-toastify';

import { createTool } from '../service';
import {
  CREATE_TOOL,
  CREATE_TOOL_PENDING,
  CREATE_TOOL_SUCCESS,
  CREATE_TOOL_FAILURE
} from '../actionTypes';


function* sagaCreateTool(action) {
  yield put({ type: CREATE_TOOL_PENDING })

  try {

    const newOid = yield call(createTool, action.data);

    yield put({ type: CREATE_TOOL_SUCCESS, oid: newOid });

    toast('Success!', { type: 'success', position: 'top-right' });

  } catch (error) {
    yield put({ type: CREATE_TOOL_FAILURE })

    toast('Error!', { type: 'error', position: 'top-right' });
  }

}

export default function* watchCreateTool() {
  yield takeLatest(CREATE_TOOL, sagaCreateTool)
}
