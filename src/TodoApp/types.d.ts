interface Todo {
    id: number
    text: string;
    complete: boolean;
  }
  interface TodoProps {
    tasks: Todo;
    toggleTodo: ToggleTodo;
  }
 

  type ToggleTodo = (selectedTodo: Todo) => void;