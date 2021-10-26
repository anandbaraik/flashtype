import React from "react";
import './Footer.css';

const Footer = () => {
    return (
        <div className="footer-container">
            <a
                className="footer-text"
                target="_blank"
                href="https://www.linkedin.com/in/anand-baraik/"
            >
                Designed & Developed By <span className="author">Anand Baraik</span>
            </a>
        </div>
    );
}

export default Footer;