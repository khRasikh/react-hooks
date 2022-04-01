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
// import UseRef from "./Components/=";
import UseRefTypeB from "./ComponentsB/UseRefB";

/**UseContexts */
// import UseContextType from "./Components/useContext";

/**UseReducers */
// import UseReducerType from "./Components/UseReducer";

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
          {/* <Route path="/useref" element={<UseRef />} /> */}
          <Route path="/usereftwo" element={<UseRefTypeB />} />
          {/* <Route path="/usecontext" element={<UseContextType />} /> */}
          {/* <Route path="/usereducer" element={<UseReducerType />} /> */}
        </Routes>
        <Footer />
      </Routers>
    </div>
  );
}

export default App;
