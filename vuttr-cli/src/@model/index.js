import { all } from 'redux-saga/effects';

import { loginSaga, loginReducer } from './login';
import { toolSaga, toolReducer } from './tool';
import { userSaga, userReducer } from './user';


export default function* rootSaga() {
  yield all([
    ...loginSaga,
    ...toolSaga,
    ...userSaga,
  ])
}

export const rootReducer = {
  loginReducer,
  toolReducer,
  userReducer,
}

export * from './login';
export * from './tool';
export * from './user';
