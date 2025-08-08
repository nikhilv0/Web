import React from 'react';
import './SocialIcons.css';
import { FaWhatsapp, FaInstagram, FaGithub, FaEnvelope } from 'react-icons/fa';

const SocialIcons = () => {
  return (
    <div className="social-icons">
      <a className="icon" href="https://wa.me/6360095984" target="_blank" rel="noopener noreferrer" title="WhatsApp">
        <FaWhatsapp />
      </a>
      <a className="icon" href="https://instagram.com/nikhilllll_nikkiiiii" target="_blank" rel="noopener noreferrer" title="Instagram">
        <FaInstagram />
      </a>
      <a className="icon" href="https://github.com/nikhilv0" target="_blank" rel="noopener noreferrer" title="GitHub">
        <FaGithub />
      </a>
      <a className="icon" href="mailto:nikhilnikki6360@gmail.com" target="_blank" rel="noopener noreferrer" title="Email">
        <FaEnvelope />
      </a>
    </div>
  );
};

export default SocialIcons;
