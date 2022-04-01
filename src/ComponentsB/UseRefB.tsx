import { useState, useRef, useEffect } from "react";
import { Link } from "react-router-dom";

const UseRefTypeB = () => {
  const [input, setInput] = useState("-");
  const count = useRef(0);

  useEffect(() => {
    count.current = count.current + 1;
  }, [input]);

  return (
    <>
      <div className="py-6 px-6">
        <button
          type="button"
          className="text-white bg-gradient-to-r from-blue-500 via-blue-600 to-blue-700 
        hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-blue-300 
        dark:focus:ring-blue-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center
         mr-2 mb-2"
        >
          <Link to="/">Home</Link>
        </button>
        <p>
          <b>TypeScrit Training:</b> a very basic practical example of UseRef:
        </p>
        <input
          type="text"
          className="newInput"
          value={input}
          onChange={(e) => setInput(e.target.value)}
        />
        <h2>Current Input: {input}</h2>
        <h2>Number of Characters: {count.current}</h2>
      </div>
    </>
  );
};

export default UseRefTypeB;
