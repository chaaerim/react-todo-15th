import TodoItem from './TodoItem';

const TodoLists = ({ todos, onDelete, onToggle }) => {
  console.log(todos);

  // isCompleted 이 false인 yetTodo 배열 생성
  const yetTodoList = todos.filter((todo) => todo.isCompleted === false);

  //isCompleted 이 true인 doneTodo 배열 생
  const doneTodoList = todos.filter((todo) => todo.isCompleted === true);

  console.log(yetTodoList);
  console.log(doneTodoList);
  return (
    <div>
      <div>🔮 To Do ({yetTodoList.length})</div>
      {yetTodoList.map((todo) => (
        <TodoItem
          todo={todo}
          onDelete={onDelete}
          onToggle={onToggle}
          key={todo.id}
        />
      ))}
      <div>❤️‍🔥 Done ({doneTodoList.length})</div>
      {doneTodoList.map((todo) => (
        <TodoItem
          todo={todo}
          onDelete={onDelete}
          onToggle={onToggle}
          key={todo.id}
        />
      ))}
    </div>
  );
};

export default TodoLists;
