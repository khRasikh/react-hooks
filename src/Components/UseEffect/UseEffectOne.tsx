import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
function UseEffectType() {
  //2. set variables
  const [time, setTime] = useState(new Date());
  const [value, setValue] = useState(9);

  //3. use it
  useEffect(() => {
    const timer = setTimeout(() => setTime(new Date()), 1000);
    return () => clearTimeout(timer);
  });
  //3. Use the state in an action
  return (
    <div>
      <div className="block text-center px-6 mx-6 py-6">
        <h2 className="flex justify-center font-medium mb-3 text-xl mb-9">
          <b>TypeScrit-React: </b>Here you see how I used UseEffect Example:
        </h2>

        <div className="my-5"></div>

        <div className="flex justify-center">
          <div className="block rounded-lg shadow-lg bg-white max-w-sm text-center">
            <div className="py-3 px-6 border-b border-gray-300">
              UseEffect Hook Example One
            </div>
            <div className="p-6">
              <p className="px-4 py-4">Click on the following buttons: </p>
              <h5 className="block justify-center text-gray-900 text-xl font-medium mb-2">
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
              <h2 style={{ color: "green" }}>{time.toLocaleString()}</h2>
            </div>

            <div className="py-3 px-6 border-t border-gray-300 text-gray-600">
              <Link to="/statetwo">
                <button
                  type="button"
                  className=" inline-block mx-2 px-6 py-2.5 bg-blue-600 text-white font-medium text-xs leading-tight uppercase rounded shadow-md hover:bg-blue-700 hover:shadow-lg focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg transition duration-150 ease-in-out"
                >
                  Back
                </button>
              </Link>
              <Link to="/effecttwo">
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
  );
}

export default UseEffectType;
