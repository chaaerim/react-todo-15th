import { useState } from 'react';

const useInput = (initialInput: string) => {
  const [todoText, setTodoText] = useState(initialInput);

  //input창에 입력된 todo를 todoText로 설정
  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const {
      target: { value },
    } = e;
    setTodoText(value);
  };

  // input창 값 비우기
  const handleInputInitialize = () => {
    setTodoText('');
  };
  return { todoText, handleInputChange, handleInputInitialize };
};
export default useInput;
