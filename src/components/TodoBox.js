import Clock from './Clock';
const TodoBox = ({ children }) => {
  return (
    <div>
      <Clock></Clock>
      <h2 className="todo-title">🔫 To Do List</h2>
      <div className="todos">{children}</div>
    </div>
  );
};

export default TodoBox;
