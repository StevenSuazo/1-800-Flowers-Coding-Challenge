import { call, put } from 'redux-saga/effects';
import { setPost } from '../PostReducer';
import { requestGetPost } from './PostReq';

// generator functs help make async easier (need more research)
export function* handleGetPost() {
  try {
    // 'yield' similar to async/await 
    const response = yield call(requestGetPost);
    const {data} = response;
    // 'put' is saga's way of dispatching actions (it's async so use yield incase)
    // setPost will set the data from API request to the redux store
    yield put(setPost(data))
  } catch (error) {
    console.log(error);
  }
}