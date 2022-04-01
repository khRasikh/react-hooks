import { useState, useRef, useEffect } from "react";
import { Link } from "react-router-dom";

const UseRefExampleTwo = () => {
  const [input, setInput] = useState("Type Here...");
  const count = useRef(0);

  useEffect(() => {
    count.current = count.current + 1;
  }, [input]);

  return (
    <>
      <div className="my-5"></div>

      <div className="flex justify-center">
        <div className="block rounded-lg shadow-lg bg-white max-w-sm text-center">
          <div className="py-3 px-3 border-b border-gray-300">
            UseRef Hook Example Two
          </div>
          <div className="block justify-center p-6">
            <p className="py-4">Type anthing on the following buttons: </p>
            <h5 className="block justify-center text-gray-900 text-xl font-medium mb-2">
              {0}
            </h5>
            <div className="block justify-center text-gray-900 text-xl font-medium mb-2">
              <input
                type="text"
                className="border-2 border-gray-700 rounded "
                placeholder={input}
                onChange={(e) => setInput(e.target.value)}
              />
            </div>
            <h2>Current Input: {input}</h2>
            <h2>Number of Characters: {count.current}</h2>
            {new Date().toLocaleString()}
          </div>
          <div className="py-3 px-6 border-t border-gray-300 text-gray-600">
            <Link to="/refone">
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
    </>
  );
};

export default UseRefExampleTwo;
