/**In this example, I'd like to practice useReducer Hook component in TypeScript React.
 *Based on its functions, I need to perform the following steps: */
/**1. Import useReducer from React  */
import { stat } from "fs";
import { type } from "os";
import React, { useReducer } from "react";
import { Link } from "react-router-dom";
/**2. Initialize the state */
type BasicAruments = {
  type: "INCREMENT" | "DECREMENT" | "RESET";
};

/**3. Use initialized State */
type MyState = {
  value: number;
};
/**3. Use Reducer */
const Reducer = (state: MyState, action: BasicAruments) => {
  switch (action.type) {
    case "INCREMENT":
      return { value: state.value + 1 };
    case "DECREMENT":
      return { value: state.value - 1 };
    case "RESET":
      return { value: state.value * 0 };
  }
};

/**4. Set Counter */
const UseReducerTypeOne = () => {
  const [states, setStates] = useReducer(Reducer, { value: 0 });

  const increment = () => {
    setStates({ type: "INCREMENT" });
  };
  const decrement = () => {
    setStates({ type: "DECREMENT" });
  };
  const reset = () => {
    setStates({ type: "RESET" });
  };
  /**5. Create UI inside return statement */
  return (
    <>
      <div className="block text-center px-6 mx-6 py-6">
        <h2 className="flex justify-center font-medium mb-3 text-xl mb-9">
          <b>TypeScrit-React: </b>Here you see how I used UseReducer Example:
        </h2>
        <div className="my-5"></div>

        <div className="flex justify-center">
          <div className="block rounded-lg shadow-lg bg-white max-w-sm text-center">
            <div className="py-3 px-6 border-b border-gray-300">
              UseReducer Hook Example Two
            </div>
            <div className="p-6">
              <p className="px-4 py-4">Click on the following buttons: </p>

              <h1>
                In this practical example, I wanna display a piza calculator
                using UseReducer hook:{" "}
              </h1>
            </div>
            <div className="block text-center py-3 px-3">
              <button
                type="button"
                onClick={increment}
                className="inline-block mx-2 px-6 py-2.5 bg-green-600 text-white font-extra-bold  leading-tight uppercase rounded shadow-md hover:bg-blue-700 hover:shadow-lg focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg transition duration-150 ease-in-out"
              >
                +
              </button>
            </div>

            <div className="block text-center py-3 px-3">
              <p className="text-xl font-bold">
                You Clicked {states.value} Times
              </p>
            </div>
            <div className="block text-center py-3 px-3">
              <button
                type="button"
                onClick={decrement}
                className="inline-block mx-2 px-6 py-2.5 bg-red-600 text-white text-xl font-extra-bold leading-tight uppercase rounded shadow-md hover:bg-blue-700 hover:shadow-lg focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg transition duration-150 ease-in-out"
              >
                -
              </button>
            </div>

            <div className="block text-center py-3 px-3">
              <button
                type="button"
                onClick={reset}
                className="inline-block mx-2 px-6 py-2.5 bg-red-600 text-white font-extra-bold  leading-tight uppercase rounded shadow-md hover:bg-blue-700 hover:shadow-lg focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg transition duration-150 ease-in-out"
              >
                Reset
              </button>
              {/* and here is the buttons */}
              <div className="mt-5 py-3 px-6 border-t border-gray-300 text-gray-600">
                <Link to="/reftwo">
                  <button
                    type="button"
                    className=" inline-block mx-2 px-6 py-2.5 bg-blue-600 text-white font-medium text-xs leading-tight uppercase rounded shadow-md hover:bg-blue-700 hover:shadow-lg focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg transition duration-150 ease-in-out"
                  >
                    Back
                  </button>
                </Link>
                <Link to="/reducertwo">
                  <button
                    type="button"
                    className="inline-block mx-2 px-6 py-2.5 bg-blue-600 text-white font-medium text-xs leading-tight uppercase rounded shadow-md hover:bg-blue-700 hover:shadow-lg focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg transition duration-150 ease-in-out"
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

export default UseReducerTypeOne;
