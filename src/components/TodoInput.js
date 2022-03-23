import { useState } from 'react';

const TodoInput = () => {
  const [todo, setTodo] = useState('');
  const onSubmit = (e) => {
    setTodo('');
    e.preventDefault();
  };
  const onChange = (e) => {
    setTodo(e.target.value);
  };
  return (
    <form onSubmit={onSubmit}>
      <input
        value={todo}
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
