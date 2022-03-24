import { useState } from 'react';

const TodoInput = ({ onInsert }) => {
  const [todoText, setTodoText] = useState('');
  const onSubmit = (e) => {
    //todo 객체 생성
    onInsert(todoText);
    //input창 비우기
    setTodoText('');

    //새로고침 방지
    e.preventDefault();
  };
  const onChange = (e) => {
    setTodoText(e.target.value);
  };
  return (
    <form onSubmit={onSubmit}>
      <input
        value={todoText}
        onChange={onChange}
        placeholder="할 일을 입력하세요"
        type="text"
        required
      />
      <button type="submit">➕</button>
    </form>
  );
};

export default TodoInput;
