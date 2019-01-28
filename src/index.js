import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter } from "react-router-dom";
import Routes from "./containers/router";

import "./styles.css";

const App = () => (
  <BrowserRouter>
    <Routes />
  </BrowserRouter>
);

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
