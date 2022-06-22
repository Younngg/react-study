import React from 'react';
import TestChildren from '../TestChildren/TestChildren';
const a = 10;
const b = 20;
const c = 30;

const Test = () => {
  return (
    <div>
      <TestChildren a={a} b={b} c={c}/>
    </div>
  );
};

export default Test;