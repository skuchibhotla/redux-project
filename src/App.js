import React from 'react';
import {useSelector, useDispatch} from 'react-redux'
import {increment, decrement} from './Actions/index'

function App() {
  const counter = useSelector(state => state.counter);
  const isLogged = useSelector(state => state.isLogged);
  const dispatch = useDispatch();
  return (
    <div className="App">

      <button onClick={() => dispatch(increment(5))}>+</button>
      <button onClick={() => dispatch(decrement(5))}>-</button>

      <p><b>Counter: </b>{counter}</p>
      
      {isLogged ? <h3>You are authorized! Access granted.</h3> : <h3>NOT AUTHORIZED! Access denied! </h3>}
    </div>
  );
}

export default App;
