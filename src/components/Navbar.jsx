import React, { useContext } from 'react';
import {Link} from 'react-router'
import AwesomeButton from './UI/button/AwesomeButton';
import { AuthContext } from './context/context';

const Navbar = () => {
    const {isAuth, setAuth} = useContext(AuthContext);

    const logout = () =>{
        setAuth(false);
        localStorage.removeItem('auth')
    }
    return (
        <div className="navbar">
            <AwesomeButton onClick={logout}>Exit</AwesomeButton>
            <div className="navbar_links">
                <Link to="/" >Мейн пейдж</Link>
                <Link to="/about">О сайте</Link>
            </div>
        </div>
    );
}

export default Navbar;
