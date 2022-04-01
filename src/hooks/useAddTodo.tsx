import { useState, useCallback, useEffect } from 'react';
import { ITodo } from '../interface/interface';

//localStorage key설정
const TODOS_KEY = 'todos';

const useAddTodo = () => {
  //localStorage에서 todos 가져오기
  const [todos, setTodos] = useState(
    JSON.parse(localStorage.getItem(TODOS_KEY) || '{}')
  );

  //localStorage에 todos 저장
  useEffect(() => {
    localStorage.setItem(TODOS_KEY, JSON.stringify(todos));
  }, [todos]);

  // input에 입력된 text로 todo 객체 생성
  const handleTodoInput = useCallback(
    (todoText: string) => {
      const todo: ITodo = {
        id: Date.now(),
        text: todoText,
        isCompleted: false,
      };

      // 원래 있던 todo에 새로운 todo 붙이기
      setTodos([...todos, todo]);
    },
    [todos]
  );
  return { todos, setTodos, handleTodoInput };
};
export default useAddTodo;
