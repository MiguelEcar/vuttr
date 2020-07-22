import { all } from 'redux-saga/effects';

import { loginSaga, loginReducer } from './login';
import { toolSaga, toolReducer } from './tool';
import { userSaga, userReducer } from './user';
import { langSaga, langReducer } from './lang';


export default function* rootSaga() {
  yield all([
    ...loginSaga,
    ...toolSaga,
    ...userSaga,
    ...langSaga,
  ])
}

export const rootReducer = {
  loginReducer,
  toolReducer,
  userReducer,
  langReducer,
}

export * from './login';
export * from './tool';
export * from './user';
export * from './lang';
