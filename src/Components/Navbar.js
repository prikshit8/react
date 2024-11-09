import './Navbar.css';

const Navbar = () => {
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
};

export default Navbar;
