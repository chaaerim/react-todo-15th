import { useCallback, useState } from 'react';
import TodoBox from './components/TodoBox';
import TodoInput from './components/TodoInput';
import TodoLists from './components/TodoLists';

const App = () => {
  const [todos, setTodos] = useState([]);
  const [yetTodo, setYetTodo] = useState([]);
  const [doneTodo, setDoneTodo] = useState([]);

  // input에 입력된 text로 todo 객체 생성
  const onInsert = useCallback(
    (todoText) => {
      const todo = {
        id: Date.now(),
        text: todoText,
        isCompleted: false,
      };

      // 원래 있던 todo에 새로운 todo 붙이기
      setTodos([...todos, todo]);
    },
    [todos]
  );

  // todo 삭제 function
  const onDelete = useCallback(
    (id) => {
      setTodos(todos.filter((todo) => todo.id !== id));
    },
    [todos]
  );

  // todo 토글 function
  const onToggle = useCallback(
    (id) => {
      setTodos(
        todos.map((todo) =>
          todo.id === id ? { ...todo, isCompleted: !todo.isCompleted } : todo
        )
      );
    },
    [todos]
  );

  // isCompleted 이 false인 yetTodo 배열 생성
  const fillYetTodo = () => {
    setYetTodo(todos.filter((todo) => todo.isCompleted === false));
  };

  //// isCompleted 이 true인 doneTodo 배열 생성
  const fillDoneTodo = () => {
    setDoneTodo(todos.filter((todo) => todo.isCompleted === true));
  };

  return (
    <TodoBox>
      <TodoInput onInsert={onInsert} />
      <TodoLists todos={todos} onDelete={onDelete} onToggle={onToggle} />
    </TodoBox>
  );
};
export default App;
