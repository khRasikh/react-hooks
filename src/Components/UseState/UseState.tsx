import { Link } from "react-router-dom";
import { useState } from "react";
/**A simple example of useState in TypeScript React */
const UseStateOne = () => {
  const [value, setValue] = useState(0);

  return (
    <>
      <div className="block text-center px-6 mx-6 py-6">
        <h2 className="flex justify-center">
          <b>TypeScrit-React: </b>Here you see how I used UseState Example:
        </h2>

        <div className="my-5"></div>

        <div className="flex justify-center">
          <div className="block rounded-lg shadow-lg bg-white max-w-sm text-center">
            <div className="py-3 px-6 border-b border-gray-300">
              UseState Hook Example One
            </div>
            <div className="p-6">
              <p className="px-4 py-4">Click on the following buttons: </p>
              <h5 className="block justify-center text-gray-900 text-xl font-medium">
                {0}
              </h5>
              <button
                type="button"
                className="focus:outline-none text-white bg-green-700 
      hover:bg-green-800 focus:ring-4 focus:ring-green-300 font-medium rounded-lg
       text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-green-600 dark:hover:bg-green-700
        dark:focus:ring-green-800"
                onClick={() => setValue(100)}
              >
                Click Here and see the result
              </button>
              <p className="block justify-center text-gray-900 text-xl font-medium mb-2">
                {value}
              </p>
              {new Date().toLocaleString()}
            </div>
            <div className="py-3 px-6 border-t border-gray-300 text-gray-600">
              <Link to="/propsb">
                <button
                  type="button"
                  className=" inline-block mx-2 px-6 py-2.5 bg-blue-600 text-white font-medium text-xs leading-tight uppercase rounded shadow-md hover:bg-blue-700 hover:shadow-lg focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg transition duration-150 ease-in-out"
                >
                  Back
                </button>
              </Link>
              <Link to="/statetwo">
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
    </>
  );
};
export default UseStateOne;
