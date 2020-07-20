import { takeLatest, put, call } from 'redux-saga/effects';

import { listTool } from '../service';
import {
  LIST_TOOL,
  LIST_TOOL_PENDING,
  LIST_TOOL_SUCCESS,
  LIST_TOOL_FAILURE
} from '../actionTypes';

function* sagaListTool(action) {
  yield put({ type: LIST_TOOL_PENDING })

  const { search } = action;

  try {

    let args = '/filter';

    if (search) {
      if (search.search !== '') {
        args += '?search=' + search.search;
        if (search.tagsOnly) {
          args += '&tags=true';
        }
      }
    }

    const list = yield call(listTool, args)

    yield put({ type: LIST_TOOL_SUCCESS, list: list })

  } catch (error) {

    yield put({ type: LIST_TOOL_FAILURE })

  }
}

export default function* watchListTool() {
  yield takeLatest(LIST_TOOL, sagaListTool)
}