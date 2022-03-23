import TodoItem from './TodoItem';

const TodoLists = ({ todos, onDelete, onToggle }) => {
  return (
    <div>
      {todos.map((todo) => (
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
