import React, { useState } from 'react';
import './App.css'; // Import necessary CSS

function Header() {
  const [menuActive, setMenuActive] = useState(false);

  const toggleMenu = () => {
    setMenuActive(!menuActive);
  };

  return (
    <header>
      <a style={{ textDecoration: 'none'}} href="/" className="logo">
        <img src="transparent-logo2/10.png" alt="Softcoin Logo" />
        <span>Softcoin</span>
      </a>
      
      <div
        id="hamburger-menu"
        className={`hamburger ${menuActive ? 'active' : ''}`} // Add 'active' class when menu is open
        onClick={toggleMenu}
      >
        <div className="line top"></div>
        <div className="line middle"></div>
        <div className="line bottom"></div>
      </div>

      <nav className={`menu ${menuActive ? 'menu-active' : ''}`} id="menu">
        <a href="https://app.softcoin.world/login">Log in</a>
        <a href="mailto:support@softcoin.world">Contact Us</a>
        <a href="/whitepaper">Whitepaper</a>
        <a href="/softie">Softie</a>
      </nav>
    </header>
  );
}

export default Header;
