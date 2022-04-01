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
      <button
        type="button"
        className="flex items-stretch text-white bg-gradient-to-r from-blue-500 via-blue-600 to-blue-700 
        hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-blue-300 
        dark:focus:ring-blue-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center
         mr-2 mb-2"
      >
        <Link to="/">Home</Link>
      </button>
      <ContextProvider>
        <h2>Following is how I used context in my app:</h2>
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
      <div className="block items-stretch px-4 py-4 mx-4 my-4">
        <p style={{ color: getVal.text }}>
          Welcome dear <b>{getVal.name}</b>
        </p>
        <p>
          {".   "}We have found your <b>ID No: </b>
          {getVal.id}
        </p>
      </div>
    </div>
  );
};
export default UseContextType;
