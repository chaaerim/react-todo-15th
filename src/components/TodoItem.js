const TodoItem = ({ todo }) => {
  const { id, text, isCompleted } = todo;
  return (
    <div>
      <span>{text}</span>
      <button>✔️</button>
      <button>🗑</button>
    </div>
  );
};

export default TodoItem;
