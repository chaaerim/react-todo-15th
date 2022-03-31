import Clock from './Clock';
import { useCallback, useEffect, useState } from 'react';
import TodoInput from './TodoInput';
import TodoLists from './TodoLists';
import styled from 'styled-components';

const Title = styled.h2`
  margin: 0;
  font-weight: normal;
`;

const TODOS_KEY = 'todos';

const TodoBox = () => {
  //localStorage key설정

  //localStorage에서 todos 가져오기
  const [todos, setTodos] = useState(
    JSON.parse(localStorage.getItem(TODOS_KEY)) || []
  );

  //localStorage에 todos 저장
  useEffect(() => {
    localStorage.setItem(TODOS_KEY, JSON.stringify(todos));
  }, [todos]);

  // input에 입력된 text로 todo 객체 생성
  const handleTodoInput = useCallback(
    (todoText: any) => {
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
  const handleTodoDelete = useCallback(
    (id: any) => {
      setTodos(todos.filter((todo: any) => todo.id !== id));
    },
    [todos]
  );

  // todo 토글 function
  const handleTodoToggle = useCallback(
    (id: any) => {
      setTodos(
        todos.map((todo: any) =>
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
      <TodoInput handleTodoInput={handleTodoInput} />
      <TodoLists
        todos={todos}
        handleTodoDelete={handleTodoDelete}
        handleTodoToggle={handleTodoToggle}
      />
    </div>
  );
};

export default TodoBox;