import { call, delay, put, takeLatest } from "redux-saga/effects";
import { counterSliceActions } from "./counterSlice";
import { getUsers } from "./api";

function* getUserSaga() {
  try {
    const users = yield call(getUsers);

    yield delay(3000);

    console.log("getUserSaga ::::::::::", users);

    yield put({
      type: counterSliceActions.getUserSuccess,
      payload: users.data,
    });
  } catch (error) {
    yield put({
      type: counterSliceActions.getUserFailure,
      payload: "Error",
    });
  }
}

export function* watchGetUser() {
  yield takeLatest(counterSliceActions.getUser, getUserSaga);
}

function* incrementSaga() {
  try {
    yield call(counterSliceActions.increment);
    yield delay(1000);
    yield put({
      type: counterSliceActions.incrementSuccess,
    });
  } catch (err) {
    yield put({
      type: counterSliceActions.incrementFailure,
      error: err,
    });
  }
}

export function* watchIncrement() {
  yield takeLatest(counterSliceActions.increment, incrementSaga);
}

function* decrementSaga() {
  try {
    yield call(counterSliceActions.decrement);
    yield put({
      type: counterSliceActions.decrementSuccess,
    });
  } catch (err) {
    yield put({
      type: counterSliceActions.decrementFailure,
      error: err,
    });
  }
}

export function* watchDecrement() {
  yield takeLatest(counterSliceActions.decrement, decrementSaga);
}
