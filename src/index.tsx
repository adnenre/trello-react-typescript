import React from "react";
import ReactDOM from "react-dom";
import { HashRouter } from "react-router-dom";
import App from "./App";
import Theme from "./Theme";
import "./index.css";
ReactDOM.render(
  <React.StrictMode>
    <Theme>
      <HashRouter>
        <App />
      </HashRouter>
    </Theme>
  </React.StrictMode>,
  document.getElementById("root")
);
