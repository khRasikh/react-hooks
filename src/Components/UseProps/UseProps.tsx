import React from "react";
import { Link } from "react-router-dom";
/**1. In this example, I used some very simple and easy examples of
 * Props in React-TypeScript. Let's get started the first Example:
 */
/*a. Add variable properties*/
type TagProps = {
  name: string;
  lastName: string;
  phone: string;
  email: string;
};

const TagName = (props: TagProps) => {
  return (
    <>
      <div className="flex justify-left px-8 py-6 mx-9 my-9">
        <h2>
          <b>TypeScrit Training:</b> Following personal information about
          <b> Khudadad Rasikh</b> are passed by props in TypeScript React:
        </h2>
      </div>
      <div className="flex justify-center">
        <div className="block p-6 rounded-lg shadow-lg bg-white max-w-sm">
          <h5 className="text-gray-900 text-xl leading-tight font-medium mb-2">
            {props.name + " "}
            {props.lastName}
          </h5>
          <p className="text-gray-700 text-base mb-4">
            {"Email " + ": " + props.email}
          </p>
          <p className="text-gray-700 text-base mb-4">
            {"Phone " + ": " + props.phone}
          </p>
          <Link to="/">
            <button
              type="button"
              className=" inline-block px-6 mx-2 py-2.5 bg-blue-600 text-white font-medium text-xs leading-tight uppercase rounded shadow-md hover:bg-blue-700 hover:shadow-lg focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg transition duration-150 ease-in-out"
            >
              Back
            </button>
          </Link>
          <Link to="/propsb">
            <button
              type="button"
              className=" inline-block mx-2 px-6 py-2.5 bg-blue-600 text-white font-medium text-xs leading-tight uppercase rounded shadow-md hover:bg-blue-700 hover:shadow-lg focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg transition duration-150 ease-in-out"
            >
              Next
            </button>
          </Link>
        </div>
      </div>
      <div className="my-9"></div>
    </>
  );
};

export const UsePropsOne = () => (
  <TagName
    name="Khudadad"
    lastName="Rasikh"
    email="kh.rasikh542@gmail.com"
    phone="+49(0)1634880974"
  />
);

/**2. In this example, I'd like to get a little more complex props and show you in another
 * component:
 */

export default UsePropsOne;
