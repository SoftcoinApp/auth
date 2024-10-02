import React from 'react';
import './App.css'; // Import your CSS file here
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Header from './Header';
import MainContent from './MainContent';
import Footer from './Footer';
import Whitepaper from './Whitepaper';
import Softie from './Softie';
import Verification from './Verification';
import ResetPassword from './ResetPassword';
import MergeAccounts from './MergeAccounts';

function App() {
  return (
    <div className="App">
      <Header />
      <MainContent />
      <Footer />
    </div>
  );
}

function AppWrapper() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/whitepaper" element={<Whitepaper />} />
        <Route path="/softie" element={<Softie />} />
        <Route path="/verification" element={<Verification />} />
        <Route path="/reset-password" element={<ResetPassword />} />
        <Route path="/merge-accounts" element={<MergeAccounts />} />
      </Routes>
    </Router>
  );
}

export default AppWrapper;


