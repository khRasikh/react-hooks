import React from "react";
/**In this example, I wanna create a basic TODO using the following hooks:
 * UseProps, UseState, UseContext, and Generic
 */
/**To create such APP, here are the steps I follow: */
/**1. Deisgn the interface */

/**2.  */

export const TodoListItem: React.FC<TodoProps> = ({ tasks, toggleTodo }) => {
  return (
    <li>
      <label
        style={{ textDecoration: tasks.complete ? "line-through" : undefined }}
      >
        <input
          type="checkbox"
          checked={tasks.complete}
          onClick={() => {
            toggleTodo(tasks);
            console.log("You clicked");
          }}
        />{" "}
        {tasks.text}
      </label>
    </li>
  );
};
