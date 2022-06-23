import React from 'react';
import TodoList from '../TodoList/index';
import TodoAddBtn from '../TodoAddBtn/index';
import './index.css';

const TodoTitleArea = ({
  todos,
  selectedTodoIndex,
  setSelectedTodoIndex,
  addTodo,
  deleteTodo,
}) => {
  return (
    <div className='todoTitleArea'>
      <h1>planner</h1>
      <TodoList
        todos={todos}
        setSelectedTodoIndex={setSelectedTodoIndex}
        selectedTodoIndex={selectedTodoIndex}
        deleteTodo={deleteTodo}
      />
      <TodoAddBtn onClick={addTodo} />
    </div>
  );
};

export default TodoTitleArea;
