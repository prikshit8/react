import React from "react";
import "./Navbar.css";

class NavbarClass extends React.Component {
  render() {
    return (
      <nav className="navbar">
        <h1>IRCTC</h1>
        <ul>
          <li>
            <a href="/">Home</a>
          </li>
          <li>
            <a href="/login">Login</a>
          </li>
          <li>
            <a href="/Register">Register</a>
          </li>
        </ul>
      </nav>
    );
  }
}

export default NavbarClass;
