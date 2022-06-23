import React from 'react';
import TodoItem from '../TodoItem';

const TodoList = ({
  todos,
  selectedTodoIndex,
  setSelectedTodoIndex,
  deleteTodo,
}) => {
  return (
    <div>
      {todos.map((todo, index) => {
        return (
          <TodoItem
            key={index}
            onClickItem={() => {
              setSelectedTodoIndex(index);
            }}
            isSelected={index === selectedTodoIndex}
            onClickDelete={(e) => {
              deleteTodo(index);
              e.preventDefault();
              e.stopPropagation();
            }}
          >
            {todo.title}
          </TodoItem>
        );
      })}
    </div>
  );
};

export default TodoList;
