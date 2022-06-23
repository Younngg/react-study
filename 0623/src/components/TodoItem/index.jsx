import React from 'react';
import './index.css';

const TodoItem = ({ children, onClickItem, isSelected, onClickDelete }) => {
  return (
    <div
      onClick={onClickItem}
      className={isSelected ? 'todoItem active' : 'todoItem'}
    >
      {children}
      <button className='todoItem_DeleteBtn' onClick={onClickDelete}>
        Del
      </button>
    </div>
  );
};

export default TodoItem;
