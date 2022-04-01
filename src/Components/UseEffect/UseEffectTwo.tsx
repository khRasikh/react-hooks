import { useState, useEffect } from "react";
import { Link } from "react-router-dom";

const UseEffectTwo = () => {
  // useState is needed in order to display the result on the screen
  const [bio, setBio] = useState([]);

  // 'async' shouldn't be used in the useEffect callback function because these callbacks are synchronous to prevent race conditions. We need to put the async function inside.
  useEffect(() => {
    const fetchData = async () => {
      const response = await fetch("https://swapi.dev/api/people/5");
      const data = await response.json();
      console.log(data);
      setBio(data);
    };
    fetchData();
  }, []);
  // Empty dependencies array will make useEffect to run only once at startup because that array never changes
  return (
    <>
      <div>
        <div className="block text-center px-6 mx-6 py-6">
          <h2 className="flex justify-center font-medium mb-3 text-xl mb-9">
            <b>TypeScrit-React: </b>Here you see how I used UseEffect Example:
          </h2>

          <div className="my-5"></div>

          <div className="flex justify-center">
            <div className="block rounded-lg shadow-lg bg-white text-center">
              <div className="py-3 px-6 border-b border-gray-300">
                UseEffect Hook Example Two. It gets data after it's refreshed:
              </div>
              <pre>{JSON.stringify(bio, null, "\t")}</pre>

              <div className="py-3 px-6 border-t border-gray-300 text-gray-600">
                <Link to="/effectone">
                  <button
                    type="button"
                    className=" inline-block mx-2 px-6 py-2.5 bg-blue-600 text-white font-medium text-xs leading-tight uppercase rounded shadow-md hover:bg-blue-700 hover:shadow-lg focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg transition duration-150 ease-in-out"
                  >
                    Back
                  </button>
                </Link>
                <Link to="/refone">
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

export default UseEffectTwo;
