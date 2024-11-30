import styled from "styled-components";
import { Link } from "react-router-dom";

import "./Navbar.css";

const StyleNav = styled.nav`
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: #ffcc00;
  padding: 10px 20px;
  color: #343a40;
`;

const Navbar = () => {
  return (
    <StyleNav>
      <h1>IRCTC</h1>
      <ul>
        <li>
          {/* <a href="/">Home</a> */}
          <Link to="/">Home</Link>
        </li>
        <li>
          {/* <a href="/login">Login</a> */}
          <Link to="/login">Login</Link>
        </li>
        <li>
          {/* <a href="/Register">Register</a> */}
          <Link to="/Register">Register</Link>
        </li>
      </ul>
    </StyleNav>
  );
};

export default Navbar;
