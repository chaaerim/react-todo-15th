//todo 인터페이스 정의
export interface ITodo {
  id: number;
  text: string;
  isCompleted: boolean;
}

//handleTodoInput 인터페이스 정의
export interface ITodoInputTypes {
  handleTodoInput(todoText: string): void;
}

// todo, handleTodoDelete, handleTodoToggle 인터페이스 정의
export interface ITodoItemTypes {
  todo: ITodo;
  handleTodoDelete(id: number): void;
  handleTodoToggle(id: number): void;
}

// todolist, handleTodoDelete, handleTodoToggle 인터페이스 정의
export interface ITodoListsTypes {
  todolist: Array<ITodo>;
  handleTodoDelete(id: number): void;
  handleTodoToggle(id: number): void;
}
