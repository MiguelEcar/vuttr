import { takeLatest, put, call } from 'redux-saga/effects';
import { toast } from 'react-toastify';

import { deleteTool } from '../service';
import {
  DELETE_TOOL,
  DELETE_TOOL_PENDING,
  DELETE_TOOL_SUCCESS,
  DELETE_TOOL_FAILURE
} from '../actionTypes';

function* sagaDeleteTool(action) {
  yield put({ type: DELETE_TOOL_PENDING, id: action.id })

  try {

    const a = yield call(deleteTool, action.id);

    if (a.status !== 204) {
      throw new Error('API delete request failed');
    } else {
      toast('Success!', { type: 'success', position: 'top-right' });
      yield put({ type: DELETE_TOOL_SUCCESS, removed: true });
    }


  } catch (error) {

    yield put({ type: DELETE_TOOL_FAILURE, removed: false });

  }
}

export default function* watchDeleteTool() {
  yield takeLatest(DELETE_TOOL, sagaDeleteTool)
}
