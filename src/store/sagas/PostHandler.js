import { call, put } from 'redux-saga/effects';
import { setPost } from '../PostReducer';
import { requestGetPost } from './PostReq';

export function* handleGetPost(action) {
  try {
    const response = yield call(requestGetPost);
    const {data} = response;
    yield put(setPost(data))
  } catch (error) {
    console.log(error);
  }
}