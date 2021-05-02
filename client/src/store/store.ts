import { applyMiddleware, compose } from 'redux';
import { createStore } from 'redux';
import createSagaMiddleware from 'redux-saga';
import { Canvas } from './ducks/canvas/contracts/state';
import { rootReducer } from './rootReducer';
import rootSaga from './saga';

const composeEnhancers = (window as any).__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const sagaMiddleware = createSagaMiddleware();

export interface RootState {
    canvas: Canvas;
}

export const store = createStore(rootReducer, composeEnhancers(
    applyMiddleware(sagaMiddleware),
));

sagaMiddleware.run(rootSaga);