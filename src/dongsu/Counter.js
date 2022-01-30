import React from "react";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import { counterSliceActions } from "./counterSlice";

export default function Counter() {
  const number = useSelector((state) => state.number);
  const dispatch = useDispatch();

  return (
    <div>
      <div>
        <div>{number}</div>
        <button onClick={() => dispatch(counterSliceActions.increment())}>
          +1
        </button>
        <button onClick={() => dispatch(counterSliceActions.decrement())}>
          -1
        </button>
      </div>
    </div>
  );
}
