import React, { Component } from "react";
import { withRouter } from "react-router-dom";

class Login extends Component {
  constructor(props, context) {
    super(props);

    this.handleSubmit = this.handleSubmit.bind(this);
  }

  componentWillMount() {
    if (window.localStorage.getItem("rr_login")) {
      this.props.history.push("/todoapp");
    }
  }

  handleSubmit(e) {
    e.preventDefault();
    const login = e.target.elements[0].value;
    window.localStorage.setItem("rr_login", login);
    if (login === "admin") {
      this.context.router.context.router.push("/admin");
    } else {
      this.props.history.push("/todoapp");
    }
  }

  render() {
    return (
      <div className="row">
        <div className="col-md-12">Пожалуйста, введите логин:</div>
        <form className="col-md-4" onSubmit={this.handleSubmit}>
          <input type="text" placeholder="login" />
          <button type="submit">Войти</button>
        </form>
      </div>
    );
  }
}

export default withRouter(Login);
