import React, { Component } from "react";
import { Navigate } from "react-router-dom";

class Counter extends Component {
  state = {
    number: 45,
  };

  increment = () => {
    var newState = {
      number: this.state.number + 1,
    };

    this.setState(newState);
  };

  decrement = () => {
    var newState = {
      number: this.state.number - 1,
    };

    this.setState(newState);
  };

  render() {
    const loggedInUser = localStorage.getItem("loggedInUser");

    return (
      <>
        <div className="container">
          <div className="card ms-2 mt-2" style={{ width: "15rem" }}>
            {!loggedInUser && <Navigate to="/login" replace={true} />}

            <div className="card-body">
              <button
                onClick={this.increment}
                type="button"
                className="btn btn-info btn-lg me-2"
              >
                +
              </button>
              <span className="badge bg-success "> {this.state.number} </span>
              <button
                onClick={this.decrement}
                type="button"
                className="btn btn-danger btn-lg ms-2"
              >
                -
              </button>
            </div>
          </div>
        </div>
      </>
    );
  }
}

export default Counter;
