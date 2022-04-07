import React, { useState } from "react";
import { TodoList } from "./TodoList";
import { AddTodoForm } from "./AddTodoForm";
import { Link } from "react-router-dom";

/**
 * @initialTodo:
 */
export const initialTodos: Array<Todo> = [
  {
    text: "Going out for Shopping",
    complete: false,
  },
  {
    text: "Working on TypeScript React",
    complete: true,
  },
];

const MyTodo: React.FC = () => {
  const [todos, setTodos] = useState<Array<Todo>>(initialTodos);

  const toggleComplete: ToggleComplete = (selectedTodo) => {
    const updatedTodos = todos.map((todo) => {
      if (todo === selectedTodo) {
        return { ...todo, complete: !todo.complete };
      }
      return todo;
    });
    setTodos(updatedTodos);
  };

  const addTodo: AddTodo = (newTodo) => {
    newTodo.trim() !== "" &&
      setTodos([...todos, { text: newTodo, complete: false }]);
  };

  return (
    <React.Fragment>
      <div>
        <div className="container">
          <div className="block text-center px-6 mx-6 py-6">
            <h2 className="block justify-center font-medium">
              <b>TypeScrit-React: </b>Here you see how I created a TODO APP!
            </h2>

            <div className="my-5"></div>

            <div className="flex justify-center">
              <div className="block rounded-lg shadow-lg bg-white max-w-sm text-left">
                <div className="py-3 px-6 border-b border-gray-300">
                  TODO APP Example One
                </div>
                <div className="p-6">
                  <TodoList todos={todos} toggleComplete={toggleComplete} />
                  <AddTodoForm addTodo={addTodo} />
                  <p className="mt-6">{new Date().toLocaleString()}</p>
                </div>
                <div className="py-3 px-6 border-t border-gray-300 text-gray-600">
                  <Link to="/callbacktwo">
                    <button
                      type="button"
                      className=" inline-block mx-2 px-6 py-2.5 bg-blue-600 text-white font-medium text-xs leading-tight uppercase rounded shadow-md hover:bg-blue-700 hover:shadow-lg focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg transition duration-150 ease-in-out"
                    >
                      Back
                    </button>
                  </Link>
                  <Link to="/">
                    <button
                      type="button"
                      className=" inline-block mx-2 px-6 py-2.5 bg-blue-600 text-white font-medium text-xs leading-tight uppercase rounded shadow-md hover:bg-blue-700 hover:shadow-lg focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg transition duration-150 ease-in-out"
                    >
                      Next
                    </button>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
};

export default MyTodo;
