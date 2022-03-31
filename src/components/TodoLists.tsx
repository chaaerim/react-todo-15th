import TodoItem from './TodoItem';
import styled from 'styled-components';
const ListContainer = styled.div`
  padding: 0;
  margin: 0;
`;
const ListTitle = styled.div`
  padding-left: 1rem;
  margin-top: 0.9rem;
  font-weight: normal;
  font-size: 17px;
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

const TodoLists = ({ todos, handleTodoDelete, handleTodoToggle }) => {
  // isCompleted 이 false인 yetTodo 배열 생성
  const yetTodoList = todos.filter((todo: any) => todo.isCompleted === false);

  //isCompleted 이 true인 doneTodo 배열 생성
  const doneTodoList = todos.filter((todo: any) => todo.isCompleted === true);

  return (
    <ListContainer>
      <ListTitle>🔮 To Do ({yetTodoList.length})</ListTitle>
      <ShowLists>
        {yetTodoList.map((todo) => (
          <TodoItem
            todo={todo}
            handleTodoDelete={handleTodoDelete}
            handleTodoToggle={handleTodoToggle}
            key={todo.id}
          />
        ))}
      </ShowLists>

      <ListTitle> ❤️‍🔥 Done ({doneTodoList.length}) </ListTitle>
      <ShowLists>
        {doneTodoList.map((todo) => (
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
