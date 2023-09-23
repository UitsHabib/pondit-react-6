import React, { Component } from "react";
import NavItem from "./nav-item";

class Navbar extends Component {
  handleLogout = () => {
    localStorage.removeItem("loggedInUser");

    window.location.reload();

    // Navigate to the /home route
    window.location.href = "/login";
  };

  render() {
    return (
      <nav className="container navbar navbar-expand-lg navbar-light bg-light mt-3 p-3">
        <div className="container-fluid">
          <a className="navbar-brand" href="#">
            Daraz
          </a>

          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav">
              <NavItem content={"Home"} Url="/home" />

              <NavItem content={"Offer"} Url="/offer" />

              <NavItem content={"Counters"} Url="/counter" />

              <NavItem content={"Login"} Url="/login" />

              <NavItem content={"Log Out"} onClick={this.handleLogout} />
            </ul>
          </div>
        </div>
      </nav>
    );
  }
}

export default Navbar;
