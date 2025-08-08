import React from 'react';
import './Footer.css';

const Footer = () => {
    return (
        <footer>
            <p>© {new Date().getFullYear()} Nikhi V. All rights reserved.</p>
        </footer>
    );
};

export default Footer;