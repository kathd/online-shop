import React from 'react';
import { NavLink } from 'react-router-dom';

const Navbar = () => {
    return (
        <div className="navbar">
            <NavLink to="/">TeeShirtz</NavLink>
            <NavLink to="/shop">Shop</NavLink>
            {/* if not logged in, Account directs to register/login page */}
            {/* <NavLink to="/account">Account</NavLink>  */}
            <NavLink to="/cart">Cart</NavLink>
        </div>
    )
}

export default Navbar
