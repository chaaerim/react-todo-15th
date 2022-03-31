import styled from 'styled-components';
const TodoItemContainer = styled.div`
  padding: 0.2rem 1.5rem 0.2rem 2rem;
  display: flex;
  justify-content: space-between;

  //toggle 스타일링
  text-decoration: ${({ defaultChecked }) =>
    defaultChecked ? 'line-through' : 'none'};
  color: ${({ defaultChecked }) => (defaultChecked ? '#adb5bd' : 'black')};
`;

const Button = styled.button`
  margin-right: 0.5rem;
`;

const TodoText = styled.span`
  font-weight: lighter;
  font-size: 15px;
`;

const TodoItem = ({ todo, handleTodoDelete, handleTodoToggle }) => {
  const { id, text, isCompleted } = todo;
  return (
    <TodoItemContainer defaultChecked={isCompleted}>
      <TodoText>{text}</TodoText>
      <div>
        <Button onClick={() => handleTodoToggle(id)}>✔️</Button>
        <Button onClick={() => handleTodoDelete(id)}>🗑</Button>
      </div>
    </TodoItemContainer>
  );
};

export default TodoItem;
