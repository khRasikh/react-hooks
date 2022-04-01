import React, { useState, useEffect, useRef } from "react";
import { Link } from "react-router-dom";

/**1. In this example, I would like to show the current input value and the previous one.
 * it means, after every rendering, we will see the output value using useRef Hook.
 * here are the steps:
 */
//1. create a functional component
const UseRefExampleOne = () => {
  //2. set initial input using useState
  const [inputValue, setInputValue] = useState("");

  //3. set another initial value using useRef
  const previousInputValue = useRef("");

  //4. se the current value using useEffect ~ that's rendered in every time
  useEffect(() => {
    previousInputValue.current = inputValue;
  }, [inputValue]);

  //5. return the method
  return (
    <>
      <div className="block text-center px-6 mx-6 py-6">
        <h2 className="flex justify-center font-medium mb-3 text-xl mb-9">
          <b>TypeScrit-React: </b>Here you see how I used UseState Example:
        </h2>

        <div className="my-5"></div>

        <div className="flex justify-center">
          <div className="block rounded-lg shadow-lg bg-white max-w-sm text-center">
            <div className="py-3 px-3 border-b border-gray-300">
              UseRef Hook Example One
            </div>
            <div className="p-6">
              <p className="py-4">Type anthing on the following buttons: </p>
              <h5 className="block justify-center text-gray-900 text-xl font-medium mb-2">
                {0}
              </h5>
              <input
                type="text"
                className="border-2 border-gray-700"
                value={inputValue}
                onChange={(e) => setInputValue(e.target.value)}
              />
              <h2 className="block justify-center text-gray-900 text-xl font-medium mb-2">
                Current Value: {inputValue}
              </h2>
              <h2 className="block justify-center text-gray-900 text-xl font-medium mb-2">
                Previous Value: {previousInputValue.current}
              </h2>
              {new Date().toLocaleString()}
            </div>
            <div className="py-3 px-6 border-t border-gray-300 text-gray-600">
              <Link to="/effecttwo">
                <button
                  type="button"
                  className=" inline-block mx-2 px-6 py-2.5 bg-blue-600 text-white font-medium text-xs leading-tight uppercase rounded shadow-md hover:bg-blue-700 hover:shadow-lg focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg transition duration-150 ease-in-out"
                >
                  Back
                </button>
              </Link>
              <Link to="/reftwo">
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

        <div className="my-5"></div>
      </div>
    </>
  );
};
export default UseRefExampleOne;
