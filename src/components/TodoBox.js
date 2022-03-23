import Clock from './Clock';
const TodoBox = ({ children }) => {
  return (
    <div>
      <Clock></Clock>
      <h2>🔫 To Do List</h2>
      <div>{children}</div>
    </div>
  );
};

export default TodoBox;
