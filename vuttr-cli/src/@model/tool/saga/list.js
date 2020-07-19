import { takeLatest, put, call } from 'redux-saga/effects';

import { listTool } from '../service';
import {
  LIST_TOOL,
  LIST_TOOL_PENDING,
  LIST_TOOL_SUCCESS,
  LIST_TOOL_FAILURE
} from '../actionTypes';

function* sagaListTool() {
  yield put({ type: LIST_TOOL_PENDING })

  try {
    const list = yield call(listTool)
    yield put({ type: LIST_TOOL_SUCCESS, list: list })

  } catch (error) {

    yield put({ type: LIST_TOOL_FAILURE })

  }
}

export default function* watchListTool() {
  yield takeLatest(LIST_TOOL, sagaListTool)
}