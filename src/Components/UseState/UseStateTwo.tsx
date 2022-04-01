import React from "react";
/**A very simple example of useState in TypeScript React */
//1. import useEffect
import { useState } from "react";
import { Link } from "react-router-dom";
const UseStateTwo = () => {
  const [Odd, setOdd] = useState(0);
  return (
    <>
      <div className="block text-center px-6 mx-6 py-6">
        <h2 className="flex justify-center font-medium mb-3 text-xl mb-9">
          <b>TypeScrit-React: </b> Here how I used UseState example.
        </h2>

        <div className="my-5"></div>

        <div className="flex justify-center">
          <div className="block rounded-lg shadow-lg bg-white max-w-sm text-center">
            <div className="py-3 px-6 border-b border-gray-300">
              UseState Hook Example
            </div>
            <div className="p-6">
              <p className="px-4 py-4">Click on the following buttons: </p>
              <h5 className="block justify-center text-gray-900 text-xl font-medium mb-2">
                <button
                  type="button"
                  className="bg-green-600  text-white p-2 rounded  leading-none items-center"
                  onClick={() => setOdd(Odd + 1)}
                >
                  Add Value (+){" "}
                  <span className="bg-white p-1 rounded text-blue-600 text-xs ml-2">
                    {Odd <= 0 ? "0" : " " + Odd}
                  </span>
                </button>
              </h5>
              <h5>{Odd}</h5>
              <button
                type="button"
                className="bg-red-600 text-white p-2 rounded  leading-none items-center"
                onClick={() => setOdd(Odd - 1)}
              >
                Remove Value (-){" "}
                <span className="bg-white p-1 rounded text-blue-600 text-xs ml-2">
                  {Odd >= 0 ? "0" : " " + Odd}
                </span>
              </button>
              <p className="text-gray-700 text-base my-4">
                Thank you for visiting
              </p>
              {new Date().toLocaleString()}
            </div>
            <div className="py-3 px-6 border-t border-gray-300 text-gray-600">
              <Link to="/usestateone">
                <button
                  type="button"
                  className=" inline-block mx-2 px-6 py-2.5 bg-blue-600 text-white font-medium text-xs leading-tight uppercase rounded shadow-md hover:bg-blue-700 hover:shadow-lg focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg transition duration-150 ease-in-out"
                >
                  Back
                </button>
              </Link>
              <Link to="/effectone">
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

        {/* Another example  */}

        <div className="my-5"></div>
      </div>
    </>
  );
};

// export default UseEffectType;
export default UseStateTwo;
