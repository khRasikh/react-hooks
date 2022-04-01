import { Link } from "react-router-dom";

export function Buttons() {
  return (
    <>
      <div className="px-3 py-3 my-3 bg-white-400"></div>

      <div className="my-4"></div>
      <div className="container mx-auto">
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          <div className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 mx-5 px-3 rounded">
            <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 mx-5 px-3 rounded">
              <Link to="/propsa">Props One</Link>
            </button>
          </div>

          <div className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 mx-5 px-3 rounded">
            <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 mx-5 px-3 rounded">
              <Link to="/propsb">Props Two</Link>
            </button>
          </div>

          <div className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 mx-5 px-3 rounded">
            <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 mx-5 px-3 rounded">
              <Link to="/usestate">UseState One</Link>
            </button>
          </div>
          <div className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 mx-5 px-3 rounded">
            <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 mx-5 px-3 rounded">
              <Link to="/usestatetwo">UseState Two</Link>
            </button>
          </div>
          <div className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 mx-5 px-3 rounded">
            <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 mx-5 px-3 rounded">
              <Link to="/useeffect">UseEffect One</Link>
            </button>
          </div>
          <div className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 mx-5 px-3 rounded">
            <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 mx-5 px-3 rounded">
              <Link to="/useeffecttwo">UseEffect Two</Link>
            </button>
          </div>
          <div className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 mx-5 px-3 rounded">
            <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 mx-5 px-3 rounded">
              <Link to="/usecontext">UseContext One</Link>
            </button>
          </div>
          <div className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 mx-5 px-3 rounded">
            <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 mx-5 px-3 rounded">
              <Link to="/usecontexttwo">UseContext Two</Link>
            </button>
          </div>
          <div className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 mx-5 px-3 rounded">
            <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 mx-5 px-3 rounded">
              <Link to="/useref">UseRef One</Link>
            </button>
          </div>
          <div className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 mx-5 px-3 rounded">
            <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 mx-5 px-3 rounded">
              <Link to="/useref">UseRef Two</Link>
            </button>
          </div>

          <div className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 mx-5 px-3 rounded">
            <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 mx-5 px-3 rounded">
              <Link to="/usereducer">UseReducer One</Link>
            </button>
          </div>
          <div className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 mx-5 px-3 rounded">
            <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 mx-5 px-3 rounded">
              <Link to="/usereducertwo">UseReducer Two</Link>
            </button>
          </div>

          <div className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 mx-5 px-3 rounded">
            <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 mx-5 px-3 rounded">
              <Link to="/usecallback">UseCallback</Link>
            </button>
          </div>
          <div className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 mx-5 px-3 rounded">
            <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 mx-5 px-3 rounded">
              <Link to="/usecallbacktwo">UseCallback</Link>
            </button>
          </div>

          <div className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 mx-5 px-3 rounded">
            <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 mx-5 px-3 rounded">
              <Link to="/usememo">UseMemo</Link>
            </button>
          </div>
          <div className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 mx-5 px-3 rounded">
            <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 mx-5 px-3 rounded">
              <Link to="/usememotwo">UseMemo</Link>
            </button>
          </div>
        </div>
      </div>
      <div className="px-3 py-3 my-3 bg-white-400"></div>
    </>
  );
}

export default Buttons;
