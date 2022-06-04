import { takeEvery, put } from 'redux-saga/effects';
import getApi from '../../services';

export function* fetchPast() {
  const apiBase = 'https://api.spacexdata.com/v5/launches/past';
  const data = yield getApi(apiBase);
  yield put({ type: 'FETCH_PAST_REQUEST', payload: data });
}

export default function* watchFetchPast() {
  yield takeEvery('FETCH_ROCKETS', fetchPast);
}
