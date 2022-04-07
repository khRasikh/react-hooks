import React from "react";

interface TodoListItemProps {
  todo: Todo;
  toggleComplete: ToggleComplete;
}

export const TodoListItem: React.FC<TodoListItemProps> = ({
  todo,
  toggleComplete,
}) => {
  return (
    <li>
      <label
        style={{ textDecoration: todo.complete ? "line-through" : undefined }}
      >
        <input
          type="checkbox"
          onChange={() => toggleComplete(todo)}
          checked={todo.complete}
          className=""
        />
        {todo.text}
      </label>
    </li>
  );
};
