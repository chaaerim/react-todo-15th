import styled from 'styled-components';
const TodoItemContainer = styled.div`
  padding: 3px 1.5rem 3px 2rem;
  display: flex;
  justify-content: space-between;
  text-decoration: ${(props) => (props.isCompleted ? 'line-through' : ' ')};
  color: ${(props) => (props.isCompleted ? '#adb5bd' : 'black')};
`;

const Button = styled.button`
  margin-right: 0.5rem;
`;

const TodoText = styled.span`
  font-weight: lighter;
  font-size: 15px;
`;

const TodoItem = ({ todo, onDelete, onToggle }) => {
  const { id, text, isCompleted } = todo;
  return (
    <TodoItemContainer isCompleted={isCompleted}>
      <TodoText>{text}</TodoText>
      <div>
        <Button onClick={() => onToggle(id)}>✔️</Button>
        <Button onClick={() => onDelete(id)}>🗑</Button>
      </div>
    </TodoItemContainer>
  );
};

export default TodoItem;
