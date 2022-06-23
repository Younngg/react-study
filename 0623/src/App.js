import './App.css';
import TodoContainer from './components/TodoContainer/index';
import TodoTitleArea from './components/TodoTitleArea/index';
import { useState } from 'react';

function App() {
  const [todos, setTodos] = useState([
    {
      title: '집에 가기',
      content: '집에 가고 싶다',
    },
    {
      title: '점심 먹기',
      content: '밥먹고 집에 가고 싶다',
    },
  ]);
  const [selectedTodoIndex, setSelectedTodoIndex] = useState(0);

  const setTodo = (newTodo) => {
    //새로 적은 값으로 todos를 교체
    const newTodos = [...todos]; //todos가 훼손되지 않도록 복사 새로운 newTodos 배열 생김
    newTodos[selectedTodoIndex] = newTodo;
    setTodos(newTodos);
  };

  const addTodo = () => {
    setTodos([
      ...todos,
      {
        title: 'untitled',
        content: '',
      },
    ]);
    setSelectedTodoIndex(todos.length);
  };

  const deleteTodo = (index) => {
    const newTodos = [...todos];
    newTodos.splice(index, 1); //인덱스부터 한개 삭제된 배열 리턴
    setTodos(newTodos);
    if (index === selectedTodoIndex) {
      setSelectedTodoIndex(0);
    }
  };

  return (
    <div className='App'>
      <TodoTitleArea
        todos={todos}
        setSelectedTodoIndex={setSelectedTodoIndex}
        selectedTodoIndex={selectedTodoIndex}
        addTodo={addTodo}
        deleteTodo={deleteTodo}
      />
      <TodoContainer todo={todos[selectedTodoIndex]} setTodo={setTodo} />
    </div>
  );
}

export default App;
