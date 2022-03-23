import TodoItem from './TodoItem';

const TodoLists = ({ todos, onDelete }) => {
  return (
    <div>
      {todos.map((todo) => (
        <TodoItem todo={todo} onDelete={onDelete} key={todo.id} />
      ))}
    </div>
  );
};

export default TodoLists;
