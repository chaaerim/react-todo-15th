const TodoItem = ({ todo, onDelete, onToggle }) => {
  const { id, text, isCompleted } = todo;
  return (
    <div>
      <span>{text}</span>
      <button onClick={() => onToggle(id)}>✔️</button>
      <button onClick={() => onDelete(id)}>🗑</button>
    </div>
  );
};

export default TodoItem;
