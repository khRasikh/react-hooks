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
              <Link to="/usestateone">UseState One</Link>
            </button>
          </div>
          <div className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 mx-5 px-3 rounded">
            <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 mx-5 px-3 rounded">
              <Link to="/statetwo">UseState Two</Link>
            </button>
          </div>
          <div className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 mx-5 px-3 rounded">
            <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 mx-5 px-3 rounded">
              <Link to="/effectone">UseEffect One</Link>
            </button>
          </div>
          <div className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 mx-5 px-3 rounded">
            <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 mx-5 px-3 rounded">
              <Link to="/effecttwo">UseEffect Two</Link>
            </button>
          </div>
          <div className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 mx-5 px-3 rounded">
            <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 mx-5 px-3 rounded">
              <Link to="/context">UseContext One</Link>
            </button>
          </div>
          <div className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 mx-5 px-3 rounded">
            <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 mx-5 px-3 rounded">
              <Link to="/contexttwo">UseContext Two</Link>
            </button>
          </div>
          <div className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 mx-5 px-3 rounded">
            <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 mx-5 px-3 rounded">
              <Link to="/refone">UseRef One</Link>
            </button>
          </div>
          <div className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 mx-5 px-3 rounded">
            <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 mx-5 px-3 rounded">
              <Link to="/reftwo">UseRef Two</Link>
            </button>
          </div>

          <div className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 mx-5 px-3 rounded">
            <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 mx-5 px-3 rounded">
              <Link to="/contextone">UseContext One</Link>
            </button>
          </div>
          <div className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 mx-5 px-3 rounded">
            <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 mx-5 px-3 rounded">
              <Link to="/contexttwo">UseContext Two</Link>
            </button>
          </div>

          <div className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 mx-5 px-3 rounded">
            <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 mx-5 px-3 rounded">
              <Link to="/reducer">UseReducer One</Link>
            </button>
          </div>
          <div className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 mx-5 px-3 rounded">
            <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 mx-5 px-3 rounded">
              <Link to="/reducertwo">UseReducer Two</Link>
            </button>
          </div>

          <div className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 mx-5 px-3 rounded">
            <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 mx-5 px-3 rounded">
              <Link to="/callback">UseCallback</Link>
            </button>
          </div>
          <div className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 mx-5 px-3 rounded">
            <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 mx-5 px-3 rounded">
              <Link to="/callbacktwo">UseCallback</Link>
            </button>
          </div>

          <div className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 mx-5 px-3 rounded">
            <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 mx-5 px-3 rounded">
              <Link to="/memo">UseMemo</Link>
            </button>
          </div>
          <div className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 mx-5 px-3 rounded">
            <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 mx-5 px-3 rounded">
              <Link to="/memotwo">UseMemo</Link>
            </button>
          </div>
        </div>
      </div>
      <div className="px-3 py-3 my-3 bg-white-400"></div>
    </>
  );
}

export default Buttons;
