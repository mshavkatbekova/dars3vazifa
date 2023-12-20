import "./App.css";
import { useDispatch, useSelector } from "react-redux";
import { increment, decrement, incrementByAmount } from "./features/counter/counterSlice";
import { useRef } from "react";

function App() {
  const { value } = useSelector((state) => state.counter);
  const dispatch = useDispatch();
  const inputVal = useRef()
  const handleSubmit = (e) => {
    e.preventDefault()
    dispatch(incrementByAmount(+inputVal.current.value))
  }
  return (
    <>
      <h1>{value}</h1>
      <button onClick={() => dispatch(increment())}>Increment</button>
      <button onClick={() => dispatch(decrement())}>Decrement</button>
      <form onSubmit={handleSubmit}>
        <input ref={inputVal} type="text" />
        <button>add</button>
      </form> 
    </>
  );
}

export default App;
