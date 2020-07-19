import { createStore, applyMiddleware, compose, combineReducers } from 'redux'
import createSagaMiddleware from 'redux-saga';
import { createLogger } from 'redux-logger';

import rootSaga, { rootReducer } from '@model';


const loggerMiddleware = createLogger();
const sagaMiddleware = createSagaMiddleware()


export default function configureStore() {
    //
    const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
    const enhancer = composeEnhancers(
        applyMiddleware(
            loggerMiddleware,
            sagaMiddleware
        ));


    const store = createStore(
        combineReducers({
            model: combineReducers({
                ...rootReducer,
            })
        }),
        enhancer
    );

    sagaMiddleware.run(rootSaga);

    return store;

}