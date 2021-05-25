import { takeLatest } from 'redux-saga/effects';
import { GET_POST } from '../PostReducer';
import { handleGetPost } from './PostHandler';

export function* rootSaga() {
  yield takeLatest(GET_POST, handleGetPost);
}