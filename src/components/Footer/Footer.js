import React from "react";
import './Footer.css';

const Footer = () => {
    return (
        <div className="footer-container">
            <a
                className="footer-text"
                target="_blank"
                href="https://peerlist.io/anandbaraik"
                rel="noreferrer"
            >
                Designed & Developed By <span className="author">Anand Baraik</span>
            </a>
        </div>
    );
}

export default Footer;