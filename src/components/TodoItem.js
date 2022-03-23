const TodoItem = ({ todo }) => {
  const [text, isCompleted] = todo;

  return (
    <div>
      <div>{text}</div>
      <button>✔️</button>
      <button>🗑</button>
    </div>
  );
};

export default TodoItem;
