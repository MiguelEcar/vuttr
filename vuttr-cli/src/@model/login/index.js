

import watchLogin from './saga/login';

export const loginSaga = [
    watchLogin(),
]

export * from './actionTypes';
export * from './reducer';
export * from './entity';