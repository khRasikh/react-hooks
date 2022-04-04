import React from "react";
/**Layout */
import Footer from "./Components/Layout/Footer";
import Header from "./Components/Layout/Header";
import Buttons from "./Components/Layout/Buttons";

/**Props */
import PropsAppOne from "./Components/UseProps/UseProps";
import PropsAppTwo from "./Components/UseProps/UsePropsTwo";
/**UseStates  */
import UseStateOne from "./Components/UseState/UseState";
import UseStateTwo from "./Components/UseState/UseStateTwo";
/**UseEffects */
import UseEffectOne from "./Components/UseEffect/UseEffectOne";
import UseEffectTwo from "./Components/UseEffect/UseEffectTwo";
/**UseRefs */
import UseRefOne from "./Components/UseRef/UseRefOne";
import UseRefTwo from "./Components/UseRef/UseRefTwo";

/**UseContexts */
import UseContextOne from "./Components/UseContext/UseContextOne";
import UseContextTwo from "./Components/UseContext/UseContextTwo";

/**UseReducers */
import UseReducerOne from "./Components/UseReducer/UseReducerOne";
import UseReducerTwo from "./Components/UseReducer/UseReducerTwo";

/**UseMemos */
import UseCallbackOne from "./Components/UseCallback/UseCallbackOne";
import UseCallbackTwo from "./Components/UseCallback/UseCallbackTwo";

/**TodoApp */
import List from "./TodoApp/TodoList";

/**Routes */
import { BrowserRouter as Routers, Routes, Route } from "react-router-dom";

function App() {
  return (
    <div>
      <Routers>
        <Header />
        <Routes>
          <Route path="/" element={<Buttons />} />
          <Route path="/footer" element={<Footer />} />
          <Route path="/propsa" element={<PropsAppOne />} />
          <Route path="/propsb" element={<PropsAppTwo />} />
          <Route path="/usestateone" element={<UseStateOne />} />
          <Route path="/statetwo" element={<UseStateTwo />} />
          <Route path="/effectone" element={<UseEffectOne />} />
          <Route path="/effecttwo" element={<UseEffectTwo />} />
          <Route path="/refone" element={<UseRefOne />} />
          <Route path="/reftwo" element={<UseRefTwo />} />
          <Route path="/contextone" element={<UseContextOne />} />
          <Route path="/contexttwo" element={<UseContextTwo />} />
          <Route path="/reducerone" element={<UseReducerOne />} />
          <Route path="/reducertwo" element={<UseReducerTwo />} />
          <Route path="/callbackone" element={<UseCallbackOne />} />
          <Route path="/callbacktwo" element={<UseCallbackTwo />} />
          <Route path="/todolist" element={<List />} />
        </Routes>
        <Footer />
      </Routers>
    </div>
  );
}

export default App;
