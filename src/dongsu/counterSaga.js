import { call, delay, put, takeLatest } from "redux-saga/effects";
import { counterSliceActions } from "./counterSlice";

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
