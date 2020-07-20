import { takeLatest, put } from 'redux-saga/effects';
import { toast } from 'react-toastify';

import {
  tool,
  NEW_TOOL,
  NEW_TOOL_SUCCESS,
} from '@model';

function* sagaNewTool(action) {

  yield put({ type: NEW_TOOL_SUCCESS, oid: tool.newOid });

}

export default function* watchNewTool() {
  yield takeLatest(NEW_TOOL, sagaNewTool)
}
