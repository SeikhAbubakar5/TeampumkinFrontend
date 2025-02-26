import React from "react";
import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";
import { Toaster } from "react-hot-toast";
import { useSelector } from "react-redux";
import Signup from "./components/Signup/Signup";
import Login from "./components/Login/Login";
import Leftside from "./components/Dashboard/LeftSide/Leftside";
import Rightside from "./components/Dashboard/RightSide/Rightside";


function App() {
  const authUser = useSelector((state) => state.auth.user);

  return (
    <Router>
      <Routes>
        <Route
          path="/"
          element={
            authUser ? (
              <div className="flex h-screen">
                <Leftside />
                <Rightside />
              </div>
            ) : (
              <Navigate to="/login" />
            )
          }
        />
        <Route path="/login" element={authUser ? <Navigate to="/" /> : <Login />} />
        <Route path="/signup" element={authUser ? <Navigate to="/" /> : <Signup />} />
      </Routes>
      <Toaster />
    </Router>
  );
}

export default App;
