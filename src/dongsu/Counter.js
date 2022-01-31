import React from "react";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import { counterSliceActions } from "./counterSlice";

export default function Counter() {
  const number = useSelector((state) => state.counter.number);
  const users = useSelector((state) => state.counter.users);
  const isLoading = useSelector((state) => state.counter.isLoading);
  const error = useSelector((state) => state.counter.error);
  const dispatch = useDispatch();

  const handleUserInfoClickButton = () => {
    dispatch(counterSliceActions.getUser());
  };

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
      <div>
        <button onClick={handleUserInfoClickButton}>유저 정보 가져오기</button>
      </div>
      {error && <h1>{error}</h1>}
      {isLoading && <h1>로딩중..................</h1>}
      {!isLoading && (
        <ul>
          {users &&
            users.map((user, index) => {
              return <li key={index}>{user.name}</li>;
            })}
        </ul>
      )}
    </div>
  );
}
