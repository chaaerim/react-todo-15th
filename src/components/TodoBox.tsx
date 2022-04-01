import Clock from './Clock';
import { useCallback, useEffect, useState } from 'react';
import TodoInput from './TodoInput';
import TodoLists from './TodoLists';
import styled from 'styled-components';
import { ITodo } from '../interface/interface';
import useAddTodo from '../hooks/useAddTodo';
import useInput from '../hooks/useInput';

const Title = styled.h2`
  margin: 0;
  font-weight: normal;
`;

const ListTitle = styled.div`
  padding-left: 1rem;
  margin-top: 0.9rem;
  font-weight: normal;
  font-size: 17px;
`;

const TodoBox = () => {
  const { todos, setTodos, handleTodoInput } = useAddTodo();

  // todo 삭제 function
  const handleTodoDelete = useCallback(
    (id: number) => {
      setTodos(todos.filter((todo: ITodo) => todo.id !== id));
    },
    [todos]
  );

  // todo 토글 function
  const handleTodoToggle = useCallback(
    (id: number) => {
      setTodos(
        todos.map((todo: ITodo) =>
          todo.id === id ? { ...todo, isCompleted: !todo.isCompleted } : todo
        )
      );
    },
    [todos]
  );

  // isCompleted 이 false인 yetTodo 배열 생성
  const yetTodoList = todos;
  //.filter((todo: ITodo) => todo.isCompleted === false);

  //isCompleted 이 true인 doneTodo 배열 생성
  const doneTodoList = todos;

  //.filter((todo: ITodo) => todo.isCompleted === true);

  return (
    <div>
      <Clock></Clock>
      <Title className="todo-title">🔫 To Do List</Title>
      <TodoInput handleTodoInput={handleTodoInput} />
      <ListTitle>🔮 To Do ({yetTodoList.length})</ListTitle>
      <TodoLists
        todolist={yetTodoList}
        handleTodoDelete={handleTodoDelete}
        handleTodoToggle={handleTodoToggle}
      />
      <ListTitle> ❤️‍🔥 Done ({doneTodoList.length}) </ListTitle>
      <TodoLists
        todolist={doneTodoList}
        handleTodoDelete={handleTodoDelete}
        handleTodoToggle={handleTodoToggle}
      />
    </div>
  );
};

export default TodoBox;
