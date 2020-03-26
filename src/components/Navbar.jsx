import React from "react";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHeart } from '@fortawesome/free-solid-svg-icons'

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
        <Link to="/likes"><FontAwesomeIcon icon={faHeart} /></Link>
      </div>
    </div>
  );
};

export default Navbar;
