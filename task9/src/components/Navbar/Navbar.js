import "./Navbar.css";

import { NavLink } from "react-router-dom";

const Navbar = () => {
  return (
    <nav>
      <NavLink className="navItem" to="/">
        Home
      </NavLink>
      <NavLink className="navItem" to="/about">
        About
      </NavLink>
      <NavLink className="navItem" to="/products">
        Products
      </NavLink>
    </nav>
  );
};

export default Navbar;
