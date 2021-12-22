import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter } from "react-router-dom";
import App from "./App";
import Theme from "./Theme";
import "./index.css";
ReactDOM.render(
  <React.StrictMode>
    <Theme>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </Theme>
  </React.StrictMode>,
  document.getElementById("root")
);
