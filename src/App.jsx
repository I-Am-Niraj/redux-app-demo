import React from "react";
import './App.css'
import { useSelector, useDispatch } from "react-redux";
import { incNumber, decNumber } from "./actions/index";

function App() {
  const myState = useSelector((state) => state.changeTheNumber)
  const dispatch = useDispatch();

  return (
    <>
      <div className="container">
        <h1>Increment/Decrement Counter</h1>
        <h4>Using React and Redux</h4>

        <div className="quantity">
          <a title="Decrement" className="quantity-minus" onClick={() => dispatch(decNumber())}>
            <span> - </span>
          </a>
          <input type="text" name="quantity" value={myState} readOnly className="quantity-input" min={0}/>
          <a title="Increment" className="quantity-plus" onClick={() => dispatch(incNumber())}>
            <span> + </span>
          </a>
        </div>
      </div>
    </>
  );
}

export default App;
