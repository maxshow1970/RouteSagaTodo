import { Route } from "react-router";
import React, { Component, PropTypes, Fragment } from "react";
import { BrowserRouter, Redirect, withRouter } from "react-router-dom";
import { connect } from "react-redux";

import TodoApp from "./components/TodoApp";
import Login from "./components/Login";
import createBrowserHistory from "history/createBrowserHistory";

const history = createBrowserHistory();

export default class Routes extends Component {
  constructor(props, context) {
    super(props);
  }

  render() {
    return (
      <Fragment>
        <Route path="/" exact component={Login} />
        <Route path="/todoapp" component={TodoApp} />
      </Fragment>
    );
  }
}
