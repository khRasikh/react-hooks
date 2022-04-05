import React from "react";
import { useState } from "react";
import { Link } from "react-router-dom";

interface ChildProps {
  name: string;
  count: number;
  onChangeTotal: (total: number) => void;
}

const Child = React.memo(({ name, count, onChangeTotal }: ChildProps) => {
  console.count("Child");

  return (
    <div>
      <h4>
        Child Component: {name} - [{count}]
      </h4>
      <button onClick={() => onChangeTotal(count + 1)}>++</button>
      <button onClick={() => onChangeTotal(count - 1)}>--</button>
    </div>
  );
});

const name = "Testing";

const Parent = () => {
  const [total, setTotal] = useState<number>(0);
  const [color, setColor] = useState<string>("#4f45e4");
  console.count("Parent");

  return (
    <div
      style={{
        width: "100%",
        height: "200px",
        backgroundColor: color,
      }}
    >
      <h3>Parent Componet</h3>
      <button
        onClick={() => setColor(color === "#4f45e4" ? "lightblue" : "#4f45e4")}
        className=""
      >
        Change Color
      </button>
      <Child
        name={name}
        count={total}
        onChangeTotal={(newTotal) => setTotal(newTotal)}
      />
    </div>
  );
};

function UseMemoOne() {
  return (
    <div className="block text-center px-6 mx-6 py-6">
      <h2 className="flex justify-center font-medium mb-3 text-xl mb-9">
        Here you see how I used UseCallback & UseMemo Example:
      </h2>

      <div className="my-5"></div>

      <div className="flex justify-center">
        <div className="block rounded-lg shadow-lg bg-white max-w-sm text-center">
          <div className="py-3 px-3 border-b border-gray-300">
            UseMemo and CallBack Hook Example One
          </div>
          <div className="p-6">
            <p className="py-4">Type anthing on the following buttons: </p>
            <h5 className="block justify-center text-gray-900 text-xl font-medium mb-2">
              {0}
            </h5>
            <h2 className="block justify-center text-gray-900 text-xl font-medium mb-2">
              <Parent />
            </h2>
            {new Date().toLocaleString()}
          </div>
          <div className="py-3 px-6 border-t border-gray-300 text-gray-600">
            <Link to="/reducertwo">
              <button
                type="button"
                className=" inline-block mx-2 px-6 py-2.5 bg-blue-600 text-white font-medium text-xs leading-tight uppercase rounded shadow-md hover:bg-blue-700 hover:shadow-lg focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg transition duration-150 ease-in-out"
              >
                Back
              </button>
            </Link>
            <Link to="/callbacktwo">
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
  );
}

export default UseMemoOne;
