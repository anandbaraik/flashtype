import React from "react";
import './Nav.css';
import logo from './../../assets/logo.png';
const Nav = () => {
  return (
    <div className="nav-container">
        <div className="nav-left">
            <img src={logo} alt="flashtype logo" className="flash-logo"/>
            <p className="flash-logo-text">FlashType</p>
        </div>
        <div className="nav-right">
            <a href="https://github.com/anandbaraik"
                target="_blank"
                rel="noreferrer"
                className="nav-ab-link">
                AB
            </a>
        </div>
    </div>
  );
}

export default Nav;