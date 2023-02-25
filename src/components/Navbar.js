import React, { useState } from 'react';
import { Link } from 'react-router-dom';


function Navbar() {
    return (
        <>
            <nav className="navbar">
                <div className="navbar-container">
                    <Link to="/" className="navbar-logo"></Link>
                    DemoAPP<i className="fab fa-typo3"> </i>
                </div>
            </nav>
        </>
    )
}

export default Navbar