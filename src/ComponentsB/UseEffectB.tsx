import { useState, useEffect } from "react";
import { Link } from "react-router-dom";

const UseEffectTwo = () => {
  // useState is needed in order to display the result on the screen
  const [bio, setBio] = useState({});

  // 'async' shouldn't be used in the useEffect callback function because these callbacks are synchronous to prevent race conditions. We need to put the async function inside.
  useEffect(() => {
    const fetchData = async () => {
      const response = await fetch("https://swapi.dev/api/people/4/");
      const data = await response.json();
      console.log(data);
      setBio(data);
    };
    fetchData();
  }, []);

  // Empty dependencies array will make useEffect to run only once at startup because that array never changes
  return (
    <div className="px-5 mx-6 my-6">
      <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 mx-5 px-3 rounded">
        <Link to="/">Home</Link>
      </button>
      <h2>
        In this example, the funcitonal component gets data from an API and pass
        it to JSON Format:{" "}
      </h2>
      <pre>{JSON.stringify(bio, null, "\t")}</pre>
    </div>
  );
};

export default UseEffectTwo;
