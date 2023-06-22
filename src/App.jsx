import React from 'react'
import { useState } from 'react';
import { BrowserRouter as Router, Routes, Route, BrowserRouter } from "react-router-dom";

import Navbar from './Pages/Navbar';
import Home from './Pages/Home';
import Profile from './Pages/Profile';
import About from './Pages/About';
import Protected from './Pages/protected';
import "./Pages/protected.css"

function App() {
  const [isLoggedIn, setisLoggedIn] = useState(null);

  function logIn() {
    return (
      setisLoggedIn(true)
    )
  }

  function logOut() {
    return (
      setisLoggedIn(false)
    )
  }
  return (
    <div>
      <BrowserRouter>
        <Navbar />
        {isLoggedIn ? (
          <button onClick={logOut}>Logout</button>
        ) : (
          <button onClick={logIn}>Login</button>
        )}
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/profile" element={
            <Protected isLoggedIn={isLoggedIn}>
              <Profile />
            </Protected>
          } />
        </Routes>
      </BrowserRouter>

    </div>
  )
}

export default App
