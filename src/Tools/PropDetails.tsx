import React from "react";
import { Link } from "react-router-dom";

type values = {
  name: string;
  id: number;
  joined: Date;
  category: string;
};
const GetValue = (props: values) => {
  return (
    <>
      <div className="px-6 mx-6 py-6">
        <h2 className="flex justify-center font-medium mb-3 text-xl mb-9">
          Welcome dear {props.name}
        </h2>

        <div className="my-5"></div>

        <div className="flex justify-center">
          <div className="block rounded-lg shadow-lg bg-white max-w-sm text-center">
            <div className="py-3 px-6 border-b border-gray-300">
              {props.category}
            </div>
            <div className="p-6">
              <h5 className="text-gray-900 text-xl font-medium mb-2">
                {props.name}
              </h5>
              <p className="text-gray-700 text-base mb-4">
                This is the second example of using Props in TypeScript-React
                application in which I used Tailwind CSS. Now, you can move on
                to UsState example by clicking the "Next" button below.
              </p>
              {props.joined.toLocaleString()}
            </div>
            <div className="py-3 px-6 border-t border-gray-300 text-gray-600">
              <Link to="/">
                <button
                  type="button"
                  className=" inline-block mx-2 px-6 py-2.5 bg-blue-600 text-white font-medium text-xs leading-tight uppercase rounded shadow-md hover:bg-blue-700 hover:shadow-lg focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg transition duration-150 ease-in-out"
                >
                  Back
                </button>
              </Link>
              <Link to="/usestateone">
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

export default GetValue;
