import { all } from 'redux-saga/effects';
// import watchFetchRockets from './watchFetchRockets';
// import watchFetchUpcoming from './watchFetchUpcomming';
// import watchFetchPast from './watchFetchPast';

export default function* rootSaga() {
  yield all([
    // watchFetchPast(),
    // watchFetchRockets(),
    // watchFetchUpcoming(),
  ]);
}
