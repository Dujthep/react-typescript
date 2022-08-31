import React from 'react'
import { useAppDispatch, useAppSelector } from '../app/hooks';
import { decrement, increment } from "../features/CounterSlice";

export const Counter = () => {

  const count = useAppSelector(state => state.counter.value)
  const dispatch = useAppDispatch()
  return (
    <>
    
      <button
        aria-label="Increment value"
        onClick={() => dispatch(increment())}
      >
        Increment
      </button>
      <span>{count}</span>
      <button
        aria-label="Decrement value"
        onClick={() => dispatch(decrement())}
      >
        Decrement
      </button>
    </>
  );
}
