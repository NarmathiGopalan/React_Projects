import React from "react";

import Classcomponent from "./react_hook/Classcompont";
import Functionalcomponent from "./react_hook/Functionalcomponent";
import Previous from "./react_hook/Previous";
export default function App() {
  return (
    <>
      <div className="App">
       <Functionalcomponent/>
       <br></br><br></br>
       <Classcomponent />
       <br></br><br></br>
       <Previous/>
   
      </div>
    </>
  )
}