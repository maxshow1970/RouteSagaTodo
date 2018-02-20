import React from "react";
import ReactDOM from "react-dom";
import Routes from "./routes";
import "./index.css";
import store from "./store";
import { Provider } from "react-redux";
import { BrowserRouter } from "react-router-dom";

ReactDOM.render(
  <Provider store={store}>
    <BrowserRouter>
      <Routes />
    </BrowserRouter>
  </Provider>,
  document.getElementById("container")
);
