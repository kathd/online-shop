import React from "react";
import { Link } from "react-router-dom";

import '../styles/navbar.css';

const Navbar = () => {
  return (
    <div className="navbar">
      <div className="logo">
        <Link to="/">TeeShirtz</Link>
      </div>
      <div className="menu">
        <Link to="/shop">Shop</Link>
        {/* if not logged in, Account directs to register/login page */}
        {/* <NavLink to="/account">Account</NavLink>  */}
        <Link to="/cart">Cart</Link>
      </div>
    </div>
  );
};

export default Navbar;
