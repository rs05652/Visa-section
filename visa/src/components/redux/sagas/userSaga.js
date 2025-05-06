import { takeLatest, call, put } from 'redux-saga/effects';
import { submitUserData,submitUserDataFailure,submitUserDataSuccess } from '../userSlice';

// Worker Saga
function* handleUserSubmit(action) {
  try {
    const response = yield call(() =>
      new Promise((res) => setTimeout(() => res(action.payload), 1000))
    );
    yield put(submitUserDataSuccess(response));
  } catch (error) {
    yield put(submitUserDataFailure(error.message));
  }
}

// Watcher Saga
export function* userSaga() {
  yield takeLatest(submitUserData.type, handleUserSubmit);
}
