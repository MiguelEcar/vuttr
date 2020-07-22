


import watchchangeLang from './saga/change';
export const langSaga = [
    watchchangeLang(),
]

export * from './actionTypes';
export * from './reducer';
