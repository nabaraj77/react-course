import { Link, NavLink } from "react-router-dom";
const Header = () => {
  return (
    <div style={{ backgroundColor: "red", height: "60px" }}>
      <ul>
        <li>
          <Link to="/">Hello</Link>
        </li>
        <li>
          <NavLink to="/about">About</NavLink>
        </li>
        <li>
          <NavLink to="/contact">Contact</NavLink>
        </li>
      </ul>
    </div>
  );
};

export default Header;
