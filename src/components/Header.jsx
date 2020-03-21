import React from 'react';

import "../styles/header.css";

const Header = ({title}) => {
    return (
        <div className="fixed-header">
            <h1>{title}</h1>
        </div>
    )
}

export default Header
