import React, { useState } from "react";
import { Link } from "react-router-dom";
import { TodoListItem } from "./TodoList";
/***
 * It's important to t node that having a great documentation would help people
 * software engineers create a real software and applications!
 * Now, let's get started!
 */
const initialTodos: Todo[] = [
  {
    id: 1,
    text: "Working on TypeScript React",
    complete: true,
  },
  {
    id: 2,
    text: "Meeting Sir Marko ",
    complete: true,
  },
  {
    id: 3,
    text: "Meeting Mrs Katja ",
    complete: false,
  },
];

const MyList = () => {
  const [tasksList, settasksList] = useState(initialTodos);

  const toggleTodo = (selectedTodo: Todo) => {
    const newTodos = tasksList.map((value) => {
      if (value === selectedTodo) {
        return {
          ...value,
          complete: !value.complete,
        };
      }
      return value;
    });
    settasksList(newTodos);
  };

  return (
    <>
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
                <ul>
                  <TodoListItem
                    tasks={initialTodos[0]}
                    toggleTodo={toggleTodo}
                  />
                  <TodoListItem
                    tasks={initialTodos[1]}
                    toggleTodo={toggleTodo}
                  />
                  <TodoListItem
                    tasks={initialTodos[2]}
                    toggleTodo={toggleTodo}
                  />
                </ul>

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
    </>
  );
};

export default MyList;
