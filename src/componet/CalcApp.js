import React from 'react';
import {add, sub,mul,div} from './calclogic';

export default function CalcApp() {
  return (
    
    <div>
        <center>
        <h1>Calculate Here</h1>
      <button onClick={add}>Addition</button>
      <button onClick={sub}>Subtraction</button>
      <button onClick={mul}>Multiplication </button>
      <button onClick={div}>Divison</button>
      </center>
    </div>

  )
}
