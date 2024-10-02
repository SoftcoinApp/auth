import React from 'react';
import './App.css'; // If necessary, import the shared CSS

function Footer() {
  return (
    <footer>
      <p>Join Our Social Media Community:</p>
      <div style={{ marginBottom: '50px'}} className="social-icons">
        <a href="https://twitter.com/softcoinproject" target="_blank" rel="noopener noreferrer"><i style={{ fontSize: '50px'}} className="fab fa-twitter"></i></a>
        <a href="https://t.me/softcoinupdates" target="_blank" rel="noopener noreferrer"><i style={{ fontSize: '50px'}} className="fab fa-telegram"></i></a>
      </div>
      <p>&copy; 2024 Softcoin. All rights reserved.</p>
    </footer>
  );
}

export default Footer;
