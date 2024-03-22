import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import "bootstrap/dist/css/bootstrap.min.css";
import { AuthContextProvider } from "./contexts/AuthContext"; // Import AuthContextProvider

ReactDOM.render(
  <React.StrictMode>
    <AuthContextProvider> {/* Wrap App with AuthContextProvider */}
      <App />
    </AuthContextProvider>
  </React.StrictMode>,
  document.getElementById("root")
);
