import React, { useState } from 'react';
import styled from 'styled-components';

const InputBox = styled.input`
  margin: 0.5rem;
  padding-left: 1rem;
  border-radius: 12px;
  background-color: rgb(241, 241, 229);
  border: none;
  height: 2.5rem;
  width: 25rem;
`;

const TodoInput = ({ handleTodoInput }) => {
  const [todoText, setTodoText] = useState('');
  const handleInputSubmit = (e: React.SyntheticEvent) => {
    //todo 객체 생성
    handleTodoInput(todoText);

    //input창 비우기
    setTodoText('');

    //새로고침 방지
    e.preventDefault();
  };
  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setTodoText(e.target.value);
  };
  return (
    <form onSubmit={handleInputSubmit}>
      <InputBox
        value={todoText}
        onChange={handleInputChange}
        placeholder="할 일을 입력하세요"
        type="text"
        required
      />
      <button type="submit">➕</button>
    </form>
  );
};

export default TodoInput;
