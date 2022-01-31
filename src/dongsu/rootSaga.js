import { all, fork } from "redux-saga/effects";
import { watchDecrement, watchIncrement } from "./counterSaga";

export default function* rootSaga() {
  yield all([fork(watchIncrement), fork(watchDecrement)]);
}
