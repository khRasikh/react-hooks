import React from "react";
/**Layout */
import Footer from "./Components/Layout/Footer";
import Header from "./Components/Layout/Header";
import Buttons from "./Components/Layout/Buttons";

/**Props */
import PropsApp from "./Components/UseProps/UseProps";
import PropsAppB from "./ComponentsB/UsePropsB";
/**UseStates  */
// import UseState from "./Components/UseState";
import UseStateTwo from "./ComponentsB/UseStateB";
/**UseEffects */
// import UseEffect from "./Components/UseEffect";
import UseEffectTwo from "./ComponentsB/UseEffectB";
/**UseRefs */
// import UseRef from "./Components/UseRef";
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
          <Route path="/propsa" element={<PropsApp />} />
          <Route path="/propsb" element={<PropsAppB />} />
          {/* <Route path="/usestate" element={<UseState />} /> */}
          <Route path="/usestatetwo" element={<UseStateTwo />} />
          {/* <Route path="/useeffect" element={<UseEffect />} /> */}
          <Route path="/useeffecttwo" element={<UseEffectTwo />} />
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
