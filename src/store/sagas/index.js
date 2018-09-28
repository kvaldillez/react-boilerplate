import { takeEvery, put, all } from 'redux-saga/effects';

import * as actions from '../actions';

const { test } = actions;

function* testSaga() {
  try {
    yield put(test());
  } catch (error) {
    console.log(error);
  }
}

function* watchTestSaga() {
  yield takeEvery(actions.TEST.REQUEST, testSaga);
}

export default function* rootSaga() {
  yield all([watchTestSaga()]);
}
