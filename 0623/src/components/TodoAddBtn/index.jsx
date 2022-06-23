import React from 'react';
import './index.css';

const TodoAddBtn = ({ onClick }) => {
  return (
    <div className='todoAddBtn'>
      <button onClick={onClick}>ADD +</button>
    </div>
  );
};

export default TodoAddBtn;
