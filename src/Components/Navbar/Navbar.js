import React, { useState } from 'react'
import './Navbar.css'
import { Link, NavLink } from 'react-router-dom'
import Logo from '../../assets/logo512.png'


export default function Navbar() {

    const [toggleMenu, setToggleMenu] = useState(false);

    const toggleNav = () => {
        setToggleMenu(!toggleMenu);
    }

    return (
        <nav className="header">
            <Link to="/" className="logo">
                <img src={Logo} alt="Tiramisu Logo" />
                <h1>Tiramisu</h1>
            </Link>
            <ul className={toggleMenu ? "navbar-menu show-nav" : "navbar-menu"}>
                <li className="navbar-menu-item">
                    <NavLink to="/" onClick={toggleNav} className={({isActive}) => {
                        return isActive ? "active-link" : ""
                    }}>
                        Recettes
                    </NavLink>
                </li>
                <li className="navbar-menu-item">
                    <NavLink to="/contact" onClick={toggleNav} className={({isActive}) => {
                        return isActive ? "active-link" : ""
                    }}>
                        Contact
                    </NavLink>
                </li>
                <li className="navbar-menu-item">
                    <NavLink to="/tb-admin/home" onClick={toggleNav} className={({isActive}) => {
                        return isActive ? "active-link" : ""
                    }}>
                        Rédac'
                    </NavLink>
                </li>
            </ul>
            <ul className="navbar-social">
                <a href="#">
                    <li className="navbar-social-item">
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"></path></svg>
                    </li>
                </a>
                <a href="#">
                    <li className="navbar-social-item">
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M23 3a10.9 10.9 0 0 1-3.14 1.53 4.48 4.48 0 0 0-7.86 3v1A10.66 10.66 0 0 1 3 4s-4 9 5 13a11.64 11.64 0 0 1-7 2c9 5 20 0 20-11.5a4.5 4.5 0 0 0-.08-.83A7.72 7.72 0 0 0 23 3z"></path></svg>
                    </li>
                </a>
                <a href="#">
                    <li className="navbar-social-item">
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path><line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line></svg>
                    </li>
                </a>
            </ul>
            <button onClick={toggleNav} className="btn-burger">
                <span className="burger-bar"></span>
            </button>
        </nav>
    )
}
