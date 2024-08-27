// Import necessary modules and types
"use client"
import { useSelector, useDispatch } from 'react-redux';
import { RootState } from '../../redux/store'; // Assuming RootState is defined in redux/store.ts
import { increment, decrement } from '../../redux/features/counter/counterSlice';

// Define Counter component
const Counter = () => {
  // Use RootState type for useSelector
  const count = useSelector((state: RootState) => state.counter.value);
  const dispatch = useDispatch();

  return (
    <div>
      <p>{count}</p>
      <button onClick={() => dispatch(increment())}>Increment</button>
      <button onClick={() => dispatch(decrement())}>Decrement</button>
    </div>
  );
};

export default Counter;
