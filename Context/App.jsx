import React from "react";
import ComponentA from "./components/ComponentB";
import { UserProvider } from "./components/UserContext"

export default function App() {
  return (
    <>
      <div className="App">
        <UserProvider value="Welcome ">
          <ComponentA  />
        </UserProvider>

      </div>
    </>
  )
}