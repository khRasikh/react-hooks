import { Link } from "react-router-dom";
import { useState } from "react";

const UseStateTypeB = () => {
  const [value, setValue] = useState(0);

  return (
    <div className="px-5 mx-6 my-6">
      <button
        type="button"
        className="text-white bg-gradient-to-r from-blue-500 via-blue-600 to-blue-700 
        hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-blue-300 
        dark:focus:ring-blue-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center
         mr-2 mb-2"
      >
        <Link to="/">Home</Link>
      </button>
      <button
        type="button"
        className="focus:outline-none text-white bg-green-700 
      hover:bg-green-800 focus:ring-4 focus:ring-green-300 font-medium rounded-lg
       text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-green-600 dark:hover:bg-green-700
        dark:focus:ring-green-800"
        onClick={() => setValue(100)}
      >
        Click Here to see the changes
      </button>

      <p>{value}</p>
    </div>
  );
};

export default UseStateTypeB;
