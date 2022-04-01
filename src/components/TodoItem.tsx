import styled from 'styled-components';
import { ITodo } from '../interface/interface';
import { ITodoItemTypes } from '../interface/interface';

const TodoItemContainer = styled.div`
  padding: 0.2rem 1.5rem 0.2rem 2rem;
  display: flex;
  justify-content: space-between;

  //toggle 스타일링
  text-decoration: ${({ isCompleted }: { isCompleted: boolean }) =>
    isCompleted ? 'line-through' : 'none'};
  color: ${({ isCompleted }: { isCompleted: boolean }) =>
    isCompleted ? '#adb5bd' : 'black'};
`;

const Button = styled.button`
  margin-right: 0.5rem;
`;

const TodoText = styled.span`
  font-weight: lighter;
  font-size: 15px;
`;

const TodoItem = ({
  todo,
  handleTodoDelete,
  handleTodoToggle,
}: ITodoItemTypes) => {
  const { id, text, isCompleted } = todo;
  return (
    <TodoItemContainer isCompleted={isCompleted}>
      <TodoText>{text}</TodoText>
      <div>
        <Button onClick={() => handleTodoToggle(id)}>✔️</Button>
        <Button onClick={() => handleTodoDelete(id)}>🗑</Button>
      </div>
    </TodoItemContainer>
  );
};

export default TodoItem;
