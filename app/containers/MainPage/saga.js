import { takeLatest, call, put } from 'redux-saga/effects';
import request from 'utils/request';
import { repoLoadingError } from 'containers/App/actions';
import { categoriesLoaded } from './actions';

import { FETCH_CATEGORIES } from './constants';

export function* getCategories() {
  const requestURL = `http://localhost:62444/api/Categories`;
  const requestOptions = {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
      Authorization:
        'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiJhZG1pbiIsImp0aSI6IjEiLCJuYmYiOjE1ODI3ODc1ODAsImV4cCI6MTU4Mjc5MTE4MCwiaWF0IjoxNTgyNzg3NTgwfQ.rK9CU0FfvrZn6QOKM8osC2T9MKLdZnCsb4rWk_whh4w',
    },
  };

  try {
    // Call our request helper (see 'utils/request')
    const response = yield call(request, requestURL, requestOptions);
    console.log(response);
    yield put(categoriesLoaded(response));
  } catch (err) {
    yield put(repoLoadingError(err));
  }
}

// Individual exports for testing
export default function* mainPageSaga() {
  // See example in containers/HomePage/saga.js
  yield takeLatest(FETCH_CATEGORIES, getCategories);
}
