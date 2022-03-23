const TodoItem = ({ todo, onDelete }) => {
  const { id, text, isCompleted } = todo;
  return (
    <div>
      <span>{text}</span>
      <button>✔️</button>
      <button onClick={() => onDelete(id)}>🗑</button>
    </div>
  );
};

export default TodoItem;
