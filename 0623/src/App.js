import './App.css';
import TodoContainer from './components/TodoContainer/index';
import TodoTitleArea from './components/TodoTitleArea/index';
import { useCallback, useState } from 'react';
import { setItem, getItem } from './lib/storage';
import debounce from 'lodash.debounce';

const debounceSetItem = debounce(setItem, 1000);

function App() {
  const [todos, setTodos] = useState(getItem('todo') || []);
  const [selectedTodoIndex, setSelectedTodoIndex] = useState(0);

  const setTodo = useCallback(
    (newTodo) => {
      //새로 적은 값으로 todos를 교체
      const newTodos = [...todos]; //todos가 훼손되지 않도록 복사 새로운 newTodos 배열 생김
      newTodos[selectedTodoIndex] = newTodo;
      setTodos(newTodos);
      debounceSetItem('todo', newTodos);
    },
    [selectedTodoIndex, todos]
  );

  const addTodo = useCallback(() => {
    const newTodos = [
      ...todos,
      {
        title: 'untitled',
        content: '',
      },
    ];
    setTodos(newTodos);
    setSelectedTodoIndex(todos.length);
    setItem('todo', newTodos);
  }, [todos]);

  const deleteTodo = useCallback(
    (index) => {
      const newTodos = [...todos];
      newTodos.splice(index, 1); //인덱스부터 한개 삭제된 배열 리턴
      setTodos(newTodos);
      if (index === selectedTodoIndex) {
        setSelectedTodoIndex(0);
      }
      setItem('todo', newTodos);
    },
    [selectedTodoIndex, todos]
  );

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
