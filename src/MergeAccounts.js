import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom'; // Import useNavigate
import './App.css'; // Import your CSS file here
import Header from './Header';
import './Whitepaper.css';
import Footer from './Footer';

function MergeAccounts() {
  const [isSubmitting, setIsSubmitting] = useState(false); // For button text
  const [formData, setFormData] = useState({
    email: '',
    webAppUsername: '',
    telegramUsername: '',
    telegramId: '',
  });
  const [message, setMessage] = useState(''); // For success/error messages
  const navigate = useNavigate(); // Initialize navigate

  // Update handleChange to use name instead of id
  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true); // Change button to "Processing..."

    try {
      const response = await fetch('https://softcoin-axlm.onrender.com/send-email', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        setMessage('Your request has been submitted successfully.');
        setTimeout(() => {
          navigate('/'); // Redirect to the home page after 2 seconds
        }, 2000);
      } else {
        setMessage('There was an error submitting your request. Please try again.');
      }
    } catch (error) {
      console.error('Error sending request:', error);
      setMessage('There was an error submitting your request. Please try again.');
    }

    setIsSubmitting(false); // Re-enable the submit button
  };

  return (
    <div className="Whitepaper">
      <Header />
      <div className="whitepaper-content">
        <h1>Merge Accounts</h1>
        <p style={{ fontSize: '12px', marginBottom: '30px' }}>
          Do you have a Softcoin account on the web app and want to use the same account on the telegram mini-app? Fill this form to request the merging of accounts.
        </p>
        <form style={{ paddingTop: '50px' }} id="account-merging-form" onSubmit={handleSubmit}>
          <input
            type="email"
            name="email"
            placeholder="Enter your email address"
            value={formData.email}
            onChange={handleChange}
            required
          />
          <input
            type="text"
            name="webAppUsername"
            placeholder="Enter your Softcoin username"
            value={formData.webAppUsername}
            onChange={handleChange}
            required
          />
          <input
            type="text"
            name="telegramUsername"
            placeholder="Enter your Telegram Username"
            value={formData.telegramUsername}
            onChange={handleChange}
            required
          />
          <input
            type="text"
            name="telegramId"
            placeholder="Enter your Telegram chatId"
            value={formData.telegramId}
            onChange={handleChange}
            required
          />
          <button className="submit-button" type="submit" disabled={isSubmitting}>
            {isSubmitting ? 'Processing...' : 'Submit'}
          </button>
        </form>
        <p id="message" className="message">{message}</p>
        <p style={{ textAlign: 'left', marginLeft: '30px', color: 'white' }}>Note:</p>
        <ol>
          <li className="note">If you haven't created a username on Telegram, ensure you do so before filling out this form.</li>
          <li className="note">During this merging process, the duplicate account created for you on Telegram will be deleted, and the progress you made on it will be lost. We are sorry for the inconvenience.</li>
          <li className="note">After your account has been successfully merged, a link will be sent to your email. Click on the link to start using your web app account in the Telegram mini app.</li>
        </ol>
        <Footer />
      </div>
    </div>
  );
}

export default MergeAccounts;
