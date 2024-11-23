import styled from "styled-components";

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
          <a href="/">Home</a>
        </li>
        <li>
          <a href="/login">Login</a>
        </li>
        <li>
          <a href="/Register">Register</a>
        </li>
      </ul>
    </StyleNav>
  );
};

export default Navbar;
