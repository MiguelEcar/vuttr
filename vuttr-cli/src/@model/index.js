import { all } from 'redux-saga/effects';

import { loginSaga, loginReducer } from './login';
import { toolSaga, toolReducer } from './tool';


export default function* rootSaga() {
  yield all([
    ...loginSaga,
    ...toolSaga,
  ])
}

export const rootReducer = {
  loginReducer,
  toolReducer,
}

export * from './login';
export * from './tool';
