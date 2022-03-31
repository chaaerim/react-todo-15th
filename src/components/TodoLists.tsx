import TodoItem from './TodoItem';
import styled from 'styled-components';
import { Todo } from '../interface/Todo';
const ListContainer = styled.div`
  padding: 0;
  margin: 0;
`;
const ShowLists = styled.div`
  padding: 10px 0;
  margin: 0 auto;
  width: 28.5rem;
  height: 180px;
  border-radius: 20px;
  overflow: auto;
  background-color: rgb(241, 241, 229);

  //스크롤바 스타일
  ::-webkit-scrollbar {
    width: 6px;
    padding: 0;
    margin: 0;
  }

  ::-webkit-scrollbar-thumb {
    height: 17%;
    background-color: rgb(182, 223, 224);
    border-radius: 10px;
  }
`;

const TodoLists = ({ todolist, handleTodoDelete, handleTodoToggle }) => {
  return (
    <ListContainer>
      <ShowLists>
        {todolist.map((todo: Todo) => (
          <TodoItem
            todo={todo}
            handleTodoDelete={handleTodoDelete}
            handleTodoToggle={handleTodoToggle}
            key={todo.id}
          />
        ))}
      </ShowLists>
    </ListContainer>
  );
};

export default TodoLists;
