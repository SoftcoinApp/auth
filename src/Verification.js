import React, { useEffect } from 'react';
import './App.css'; // Import your CSS file here
import Header from './Header';
import './Whitepaper.css';

function Verification() {

  useEffect(() => {
    // Get the token from the URL
    const urlParams = new URLSearchParams(window.location.search);
    const token = urlParams.get('token');

    if (!token) {
      document.getElementById('verification-message').textContent = 'No token found in the URL.';
      return;
    }

    // Make an API request to verify the email
    fetch(`https://softcoin-axlm.onrender.com/api/auth/verify-email?token=${token}`)
      .then(response => {
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        return response.json();
      })
      .then(data => {
        console.log('Verification response:', data); // Log response to check if everything is working
        const messageElement = document.getElementById('verification-message');
        if (data.message) {
          messageElement.textContent = data.message;
          if (data.success) {
            console.log('Verification successful, redirecting...');
            setTimeout(() => {
              window.location.href = 'https://app.softcoin.world/login';
            }, 3000);
          }
        } else {
          messageElement.textContent = 'Verification failed.';
        }
      })
      .catch(error => {
        console.error('Error verifying email:', error);
        document.getElementById('verification-message').textContent = 'An error occurred during email verification.';
      });
  }, []); // Empty dependency array ensures this runs only once after the component mounts

  return (
    <div className="Whitepaper">
      <Header />
      <div className="whitepaper-content">
        <h1>Verification</h1>
        <p className="message" id="verification-message">Verifying...</p>
      </div>
    </div>
  );
}

export default Verification;
