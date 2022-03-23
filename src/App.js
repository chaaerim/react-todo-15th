import { useCallback, useState } from 'react';
import TodoBox from './components/TodoBox';
import TodoInput from './components/TodoInput';
import TodoLists from './components/TodoLists';

const App = () => {
  const [todos, setTodos] = useState([]);
  const onInsert = useCallback(
    (todoText) => {
      const todo = {
        id: Date.now(),
        text: todoText,
        isCompleted: false,
      };
      setTodos([...todos, todo]);
    },
    [todos]
  );

  const onDelete = useCallback(
    (id) => {
      setTodos(todos.filter((todo) => todo.id !== id));
    },
    [todos]
  );

  return (
    <TodoBox>
      <TodoInput onInsert={onInsert} />
      <TodoLists todos={todos} onDelete={onDelete} />
    </TodoBox>
  );
};
export default App;
