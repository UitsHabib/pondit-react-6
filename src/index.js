import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import { BrowserRouter } from "react-router-dom";

import "bootstrap/dist/css/bootstrap.min.css";

var appDiv = document.getElementById("app");
var root = ReactDOM.createRoot(appDiv);

root.render(
  <BrowserRouter>
    <App />
  </BrowserRouter>
);
