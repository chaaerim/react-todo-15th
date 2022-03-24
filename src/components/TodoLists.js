import TodoItem from './TodoItem';

const TodoLists = ({ todos, onDelete, onToggle }) => {
  // isCompleted 이 false인 yetTodo 배열 생성
  const yetTodoList = todos.filter((todo) => todo.isCompleted === false);

  //isCompleted 이 true인 doneTodo 배열 생
  const doneTodoList = todos.filter((todo) => todo.isCompleted === true);

  return (
    <div>
      <div>
        🔮 To Do ({yetTodoList.length})
        {yetTodoList.map((todo) => (
          <TodoItem
            todo={todo}
            onDelete={onDelete}
            onToggle={onToggle}
            key={todo.id}
          />
        ))}
      </div>
      <div>
        ❤️‍🔥 Done ({doneTodoList.length})
        {doneTodoList.map((todo) => (
          <TodoItem
            todo={todo}
            onDelete={onDelete}
            onToggle={onToggle}
            key={todo.id}
          />
        ))}
      </div>
    </div>
  );
};

export default TodoLists;
