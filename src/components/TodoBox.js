import Clock from './Clock';
import { useCallback, useEffect, useState } from 'react';
import TodoInput from './TodoInput';
import TodoLists from './TodoLists';
import styled from 'styled-components';

const Title = styled.h2`
  margin: 0;
  font-weight: normal;
`;

const TodoBox = () => {
  //localStorage key설정
  const TODOS_KEY = 'todos';

  //렌더링 시 localStorage에서 todos 가져오기
  const [todos, setTodos] = useState(
    () => JSON.parse(localStorage.getItem(TODOS_KEY)) || []
  );

  //localStorage에 todos 저장
  useEffect(() => {
    localStorage.setItem(TODOS_KEY, JSON.stringify(todos));
  }, [todos]);

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

  return (
    <div>
      <Clock></Clock>
      <Title className="todo-title">🔫 To Do List</Title>
      <TodoInput onInsert={onInsert} />

      <TodoLists todos={todos} onDelete={onDelete} onToggle={onToggle} />
    </div>
  );
};

export default TodoBox;
