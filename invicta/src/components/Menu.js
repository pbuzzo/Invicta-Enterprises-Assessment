import React from "react";
import Drops from "./Dropdown";
import { Link } from "react-router-dom";
import "./Menu.css";

class Menu extends React.Component {
  handleLogin = event => {
    event.preventDefault();
    this.props.login();
  };

  render() {
    return (
      <div id="menu">
        {/* <h1 id="h1" class="text-shadow underline underline--double">
          G.R. Building System
        </h1> */}
        <img
            src="https://grbuildingsystemsusa.com/wp-content/uploads/2019/02/cropped-Rhino-Logo-Website-01-287x93.png"
            class="shadowed"
            alt="Traversy Media"
        />
        <Link className="menuLinks" activeClassName="selected" to="/">
          Home
        </Link>
        <Drops />
        <Link className="menuLinks" activeClassName="selected" to="/">
          Projects
        </Link>
        <Link
          className="menuLinks"
          activeClassName="selected"
          to="/"
        >
          What Sets Us Apart
        </Link>
      </div>
    );
  }
}


export default Menu;
