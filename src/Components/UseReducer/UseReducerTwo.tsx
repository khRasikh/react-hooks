import { useReducer } from "react";
import { Link } from "react-router-dom";

type PizzaData = {
  numberOfPeople: number;
  slicesPerPerson: number;
  slicesPerPie: number;
};

type PizzaState = PizzaData & { pizzasNeeded: number };

const calculatePizzasNeeded = ({
  numberOfPeople,
  slicesPerPerson,
  slicesPerPie,
}: PizzaData): number => {
  return Math.ceil((numberOfPeople * slicesPerPerson) / slicesPerPie);
};

const addPizzasNeededToPizzaData = (data: PizzaData): PizzaState => {
  return { ...data, pizzasNeeded: calculatePizzasNeeded(data) };
};

const reducer = (state: any, action: any) => {
  if (action.type === "UPDATE_NUMBER_OF_PEOPLE") {
    return addPizzasNeededToPizzaData({
      ...state,
      numberOfPeople: action.payload,
    });
  }

  if (action.type === "UPDATE_SLICES_PER_PERSON") {
    return addPizzasNeededToPizzaData({
      ...state,
      slicesPerPerson: action.payload,
    });
  }

  if (action.type === "UPDATE_SLICES_PER_PIE") {
    return addPizzasNeededToPizzaData({
      ...state,
      slicesPerPie: action.payload,
    });
  }

  return state;
};

const Calculation = ({ count }: { count: any }) => {
  return (
    <section className="calculation">
      <p className="count">
        Okay, now <b className="text-color: blue">{count}</b> Pizzas needed.
      </p>
    </section>
  );
};

const Calculator = ({ dispatch, state }: { state: any; dispatch: any }) => {
  return (
    <div className="my-6">
      <form onSubmit={() => {}}>
        <label htmlFor="number-of-people">Number of People</label>
        <input
          id="number-of-people"
          type="number"
          className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          value={state.numberOfPeople}
          onChange={(event) =>
            dispatch({
              type: "UPDATE_NUMBER_OF_PEOPLE",
              payload: event.target.value,
            })
          }
        />
        <label htmlFor="slices-per-person">Slices Per Person</label>
        <input
          id="slices-per-person"
          type="number"
          className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          value={state.slicesPerPerson}
          onChange={(event) =>
            dispatch({
              type: "UPDATE_SLICES_PER_PERSON",
              payload: event.target.value,
            })
          }
        />
        <label htmlFor="slices-per-Pie">Slices Per Pie</label>
        <input
          id="slices-per-Pie"
          type="number"
          className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          value={state.slicesPerPie}
          onChange={(event) =>
            dispatch({
              type: "UPDATE_SLICES_PER_PIE",
              payload: event.target.value,
            })
          }
        />
      </form>
    </div>
  );
};

const initialState: PizzaState = {
  numberOfPeople: 2,
  slicesPerPerson: 10,
  slicesPerPie: 2,
  pizzasNeeded: 4,
};

const UseReducerType = () => {
  const [state, dispatch] = useReducer(reducer, initialState);

  return (
    <>
      <div className="block text-center px-6 mx-6 py-6">
        <h2 className="flex justify-center font-medium mb-3 text-xl mb-9">
          <b>TypeScrit-React: </b>Here you see how I used UseReducer Example:
        </h2>

        <div className="my-5"></div>

        <div className="flex justify-center">
          <div className="block rounded-lg shadow-lg bg-white max-w-sm text-center">
            <div className="py-3 px-6 border-b border-gray-300">
              UseReducer Hook Example One
            </div>
            <div className="p-6">
              <p className="px-4 py-4">Click on the following buttons: </p>

              <h1>
                In this practical example, I wanna display a piza calculator
                using UseReducer hook:{" "}
              </h1>
              <div className="">
                <Calculator state={state} dispatch={dispatch} />
                <Calculation count={state.pizzasNeeded} />
              </div>
              {new Date().toLocaleString()}
            </div>
            <div className="py-3 px-6 border-t border-gray-300 text-gray-600">
              <Link to="/reducerone">
                <button
                  type="button"
                  className=" inline-block mx-2 px-6 py-2.5 bg-blue-600 text-white font-medium text-xs leading-tight uppercase rounded shadow-md hover:bg-blue-700 hover:shadow-lg focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg transition duration-150 ease-in-out"
                >
                  Back
                </button>
              </Link>
              <Link to="/callone">
                <button
                  type="button"
                  className="inline-block mx-2 px-6 py-2.5 bg-blue-600 text-white font-medium text-xs leading-tight uppercase rounded shadow-md hover:bg-blue-700 hover:shadow-lg focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg transition duration-150 ease-in-out"
                >
                  Next
                </button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default UseReducerType;
