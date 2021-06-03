import { takeLatest } from 'redux-saga/effects';
import { GET_POST } from '../PostReducer';
import { handleGetPost } from './PostHandler';

export function* rootSaga() {
  // use takeLatest to get only one req incase call is made more than once.
  // will lookout for GET_POST action and map it to the handle funct
  yield takeLatest(GET_POST, handleGetPost);
}