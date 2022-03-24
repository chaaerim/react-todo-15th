import Clock from './Clock';
import { useCallback, useState } from 'react';
import TodoInput from './TodoInput';
import TodoLists from './TodoLists';

const TodoBox = ({ children }) => {
  const [todos, setTodos] = useState([]);

  //localStorage key설정
  let TODOS_KEY = 'todos';

  //localStorage에 todos 저장
  const onSaveTodos = () => {
    localStorage.setItem(TODOS_KEY, JSON.stringify(todos));
  };

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
    onSaveTodos(),
    [todos]
  );

  // todo 삭제 function
  const onDelete = useCallback(
    (id) => {
      setTodos(todos.filter((todo) => todo.id !== id));
    },
    onSaveTodos(),
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

  return (
    <div>
      <Clock></Clock>
      <h2 className="todo-title">🔫 To Do List</h2>
      <TodoInput onInsert={onInsert} />

      <TodoLists todos={todos} onDelete={onDelete} onToggle={onToggle} />
      <div className="todos">{children}</div>
    </div>
  );
};

export default TodoBox;
