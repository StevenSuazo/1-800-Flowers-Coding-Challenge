import { combineReducers, createStore, applyMiddleware, compose } from 'redux';
import createSagaMiddleware from 'redux-saga';
import postReducer from './PostReducer';
import { rootSaga } from './sagas/RootSaga';

const sagaMiddleware = createSagaMiddleware();

const reducer = combineReducers({
  post: postReducer
});

const composeEnhancer = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = createStore(reducer, composeEnhancer(applyMiddleware(sagaMiddleware)));

//  listens for any dispatched actions
sagaMiddleware.run(rootSaga);

export default store
