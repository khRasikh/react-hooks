type Todo = {
  text: string;
  complete: boolean;
};

type ToggleComplete = (selectedTodo: Todo) => void;

type AddTodo = (newTodo: string) => void;


// interface Todo {
//   // id: number
//   text: string;
//   complete: boolean;
// }
// interface TodoProps {
//   tasks: Todo;
//   toggleTodo: ToggleTodo;
// }


// type ToggleTodo = (selectedTodo: Todo) => void;