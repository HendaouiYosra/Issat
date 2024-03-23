import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import Login from "./pages/Login";
import Home from "./pages/Home";
import { useContext, useState } from "react";
import AuthContext from "./contexts/AuthContext";
import Profile from "./pages/Profile";

function App() {
  //const {darkMode}=useContext(DarkModeContext);
  const { currentUser } = useContext(AuthContext);

  function RequireAuth({ children }) {
    console.log(currentUser);
    return currentUser ? children : <Navigate to="/login" />;
  }
  console.log(currentUser);
  return (
    <BrowserRouter>
      <Routes>
        <Route path="login" element={<Login />}></Route>
        <Route
          path="home"
          element={
            <RequireAuth>
              <Home />
            </RequireAuth>
          }
        ></Route>
        <Route path="profile" element={
            <RequireAuth>
              <Profile/>
            </RequireAuth>
          }></Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
