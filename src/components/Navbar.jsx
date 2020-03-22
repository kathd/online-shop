import React from "react";
import { NavLink } from "react-router-dom";

import '../styles/navbar.css';

const Navbar = () => {
  return (
    <div className="navbar">
      <div className="logo">
        <NavLink to="/">TeeShirtz</NavLink>
      </div>
      <div className="menu">
        <NavLink to="/shop">Shop</NavLink>
        {/* if not logged in, Account directs to register/login page */}
        {/* <NavLink to="/account">Account</NavLink>  */}
        <NavLink to="/cart">Cart</NavLink>
      </div>
    </div>
  );
};

export default Navbar;
