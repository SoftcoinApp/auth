import React, { useState } from 'react';
import './Reset.css';
import Header from './Header';

function ResetPassword() {
  const [newPassword, setNewPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [message, setMessage] = useState('');
  const [messageColor, setMessageColor] = useState('');
  const [isProcessing, setIsProcessing] = useState(false); // New state to track form submission

  const handleSubmit = async (event) => {
    event.preventDefault();

    if (newPassword !== confirmPassword) {
      setMessage('Passwords do not match!');
      setMessageColor('red');
      return;
    }

    const urlParams = new URLSearchParams(window.location.search);
    const token = urlParams.get('token');

    setIsProcessing(true); // Set processing state

    try {
      const response = await fetch('https://softcoin-axlm.onrender.com/api/auth/reset-password', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ token, newPassword })
      });

      const result = await response.json();
      setMessage(result.message);
      setMessageColor(response.ok ? '#155724' : 'red');

      if (response.ok) {
        setTimeout(() => window.location.href = 'https://app.softcoin.world/login', 3000); // Redirect after success
      }
    } catch (error) {
      setMessage('An error occurred. Please try again.');
      setMessageColor('red');
    } finally {
      setIsProcessing(false); // Reset processing state after submission
    }
  };

  return (
    <div style={{ margin: '0', padding: '0' }}>
      <Header />
      <div className="container">
        <h1>Reset Password</h1>
        <form id="reset-password-form" onSubmit={handleSubmit}>
          <input
            type="password"
            id="new-password"
            placeholder="Enter new password"
            value={newPassword}
            onChange={(e) => setNewPassword(e.target.value)}
            required
            disabled={isProcessing} // Disable input during processing
          />
          <input
            type="password"
            id="confirm-password"
            placeholder="Confirm new password"
            value={confirmPassword}
            onChange={(e) => setConfirmPassword(e.target.value)}
            required
            disabled={isProcessing} // Disable input during processing
          />
          <button className="submit-button" type="submit" disabled={isProcessing}>
            {isProcessing ? 'Processing...' : 'Reset Password'} {/* Change button text */}
          </button>
        </form>
        <p id="message" className="message" style={{ color: messageColor }}>{message}</p>
      </div>
    </div>
  );
}

export default ResetPassword;
