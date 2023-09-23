import React, { Component } from "react";
import axios from "axios";
import { Navigate } from "react-router-dom";

class Login extends Component {
  state = {
    email: "",
    password: "",
  };

  handleEmailChange = (event) => {
    const updatedEmail = event.target.value;

    this.setState({ ...this.state, email: updatedEmail }); // spread operator
  };

  handlePassword = (event) => {
    const updatedPassword = event.target.value;

    this.setState({ ...this.state, password: updatedPassword }); // spread operator
  };

  handleLogin = (event) => {
    event.preventDefault();

    const { email, password } = this.state; // object descrtructuing

    // axios.

    // api method
    // GET
    // POST
    // DELETE
    // PUT
    // Patch

    const body = {
      username: email,
      password,
    };

    const success = (response) => {
      this.setState({ ...this.state, user: response.data });
      localStorage.setItem("loggedInUser", true);
    };

    function error(err) {
      console.log("=============error login ==============", err);
    }

    axios
      .post("https://dummyjson.com/auth/login", body)
      .then(success)
      .catch(error);
  };

  render() {
    const loggedInUser = localStorage.getItem("loggedInUser");
    console.log("====", loggedInUser);

    return (
      <div className="container mt-5">
        <div className="col-lg-6">
          {loggedInUser && <Navigate to="/counter" replace={true} />}

          <form>
            <div className="mb-3">
              <label for="email" className="form-label">
                Email address or Username
              </label>

              {/* This input is for  email */}
              <input
                type="email"
                value={this.state.email}
                onChange={this.handleEmailChange}
                // onClick={}
                className="form-control"
                id="email"
              />
            </div>
            <div className="mb-3">
              <label for="password" className="form-label">
                Password
              </label>

              {/* This input is for  password */}
              <input
                type="password"
                value={this.state.password}
                className="form-control"
                id="password"
                onChange={this.handlePassword}
              />
            </div>
            <button
              type="btn"
              className="btn btn-primary"
              onClick={this.handleLogin}
            >
              Login
            </button>
          </form>
        </div>
      </div>
    );
  }
}

export default Login;
