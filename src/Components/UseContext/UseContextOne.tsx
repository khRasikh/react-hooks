import React, { createContext, useContext } from "react";
import { Link } from "react-router-dom";

/**1. Create a type decleration */
export const putValue = {
  name: "Rasikh",
  main: "blue",
  text: "red",
  id: 1231231,
};

/**2. Define context provider properties  */
type ContextPoroviderProps = {
  children: React.ReactNode;
};

export const Context = createContext(putValue);

export const ContextProvider = ({ children }: ContextPoroviderProps) => {
  return <Context.Provider value={putValue}>{children}</Context.Provider>;
};

const UseContextType = () => {
  return (
    <div className="px-6 py-6 mx-6 my-6">
      <ContextProvider>
        <Box />
      </ContextProvider>
    </div>
  );
};

/**3. Create a functional component  */
export const Box = () => {
  const getVal = useContext(Context);
  // return <div style={{ color: getVal.primary.text }}>My Context</div>;
  return (
    <div>
      <div className="block text-center px-6 mx-6 py-6">
        <h2 className="flex justify-center font-medium mb-3 text-xl mb-9">
          <b>TypeScrit-React: </b>Here you see how I used UseContext Example:
        </h2>

        <div className="my-5"></div>

        <div className="flex justify-center">
          <div className="block rounded-lg shadow-lg bg-white max-w-sm text-center">
            <div className="py-3 px-6 border-b border-gray-300">
              UseContext Hook Example One
            </div>
            <div className="block items-stretch px-4 py-4 mx-4 my-4">
              <p style={{ color: getVal.text }}>
                Welcome dear <b>{getVal.name}</b>
              </p>
              <p>
                {".   "}We have found your <b>ID No: </b>
                {getVal.id}
              </p>
            </div>
            <div className="py-3 px-6 border-t border-gray-300 text-gray-600">
              <Link to="/reftwo">
                <button
                  type="button"
                  className=" inline-block mx-2 px-6 py-2.5 bg-blue-600 text-white font-medium text-xs leading-tight uppercase rounded shadow-md hover:bg-blue-700 hover:shadow-lg focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg transition duration-150 ease-in-out"
                >
                  Back
                </button>
              </Link>
              <Link to="/contexttwo">
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
};
export default UseContextType;
