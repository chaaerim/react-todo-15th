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

  return (
    <TodoBox>
      <TodoInput onInsert={onInsert} />
      <TodoLists todos={todos} />
    </TodoBox>
  );
};
export default App;
