import React from 'react';
import {Link} from 'react-router'

const Navbar = () => {
    return (
        <div className="navbar">
            <div className="navbar_links">
                <Link to="/" >Мейн пейдж</Link>
                <Link to="/about">О сайте</Link>
            </div>
        </div>
    );
}

export default Navbar;
