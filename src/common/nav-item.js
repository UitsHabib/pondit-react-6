import React, { Component } from "react";
import { Link } from "react-router-dom";

class NavItem extends Component {
  render() {
    const text = this.props.content;
    const Url = this.props.Url;
    const onClick = this.props.onClick;

    return (
      <li className="nav-item">
        <Link onClick={onClick} to={Url} className="nav-link active">
          {text}
        </Link>

        {/* <a className="nav-link active" aria-current="page">
        </a> */}
      </li>
    );
  }
}

export default NavItem;
