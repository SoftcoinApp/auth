import React from 'react';
import './App.css'; // Import your CSS file here
import Header from './Header';
import Footer from './Footer';
import './Whitepaper.css';


function Whitepaper() {
  return (
    <div className="Whitepaper">
      <Header />
      <div className="whitepaper-content">
        <h1>Whitepaper</h1>
        <p>Welcome to the Softcoin Whitepaper. Here, we explain our vision, technology, and the roadmap for Softcoin.</p>
      <div className="section">
            <h2>1. Introduction</h2>
            <h3>1.1. Abstract</h3>
            <p>Softcoin is a next-generation cryptocurrency designed to provide fast, secure, and scalable digital transactions. Utilizing a novel consensus algorithm, Proof of Stake with Enhanced Security (PoSES), Softcoin aims to address current issues of scalability, energy consumption, and transaction speed in the cryptocurrency space.</p>
            
            <h3>1.2. Background</h3>
            <p>Cryptocurrencies have revolutionized financial systems by providing decentralized and borderless transactions. However, many existing cryptocurrencies face challenges such as high transaction fees, slow processing times, and significant energy consumption. Softcoin seeks to overcome these limitations.</p>
        </div>

        <div className="section">
            <h2>2. Problem Statement</h2>
            <ul>
                <li><strong>Scalability</strong>: Many cryptocurrencies struggle to process a large number of transactions quickly.</li>
                <li><strong>Energy Efficiency</strong>: Proof of Work (PoW) algorithms consume vast amounts of energy.</li>
                <li><strong>Security</strong>: Vulnerabilities in some consensus mechanisms can lead to attacks such as double-spending.</li>
            </ul>
        </div>

        <div className="section">
            <h2>3. Softcoin Overview</h2>
            <h3>3.1. Vision</h3>
            <p>Our vision is to create a cryptocurrency that is accessible, secure, and efficient, enabling seamless transactions for users worldwide.</p>
            
            <h3>3.2. Key Features</h3>
            <ul>
                <li><strong>PoSES Consensus Algorithm</strong>: A hybrid model combining Proof of Stake (PoS) with additional security measures to prevent common attack vectors.</li>
                <li><strong>Scalable Network</strong>: Designed to handle thousands of transactions per second.</li>
                <li><strong>Low Fees</strong>: Minimal transaction costs to encourage everyday use.</li>
            </ul>
        </div>

        <div className="section">
            <h2>4. Technology</h2>
            <h3>4.1. Blockchain Architecture</h3>
            <p>Softcoin operates on a decentralized blockchain, ensuring transparency and security. The blockchain is optimized for speed and efficiency, using advanced cryptographic techniques to secure transactions.</p>
            
            <h3>4.2. PoSES Consensus Mechanism</h3>
            <p>The PoSES consensus algorithm builds on PoS, where validators are selected based on the number of coins they hold and are willing to "stake." Enhanced security features are integrated to protect against potential threats, ensuring a robust network.</p>
            
            <h3>4.3. Smart Contracts</h3>
            <p>Softcoin supports smart contracts, enabling developers to create decentralized applications (dApps) on the platform. These contracts are executed automatically when predefined conditions are met.</p>
        </div>

        <div className="section">
            <h2>5. Use Cases</h2>
            <h3>5.1. Financial Transactions</h3>
            <p>Softcoin can be used for a wide range of financial transactions, from everyday purchases to large-scale business payments, thanks to its low fees and fast processing times.</p>
            
            <h3>5.2. Decentralized Applications</h3>
            <p>Developers can leverage the Softcoin blockchain to build dApps, including decentralized finance (DeFi) platforms, gaming, and supply chain solutions.</p>
            
            <h3>5.3. Tokenization</h3>
            <p>Businesses can issue their tokens on the Softcoin blockchain, representing assets, loyalty points, or other digital goods.</p>
        </div>

        <div className="section">
            <h2>6. Tokenomics</h2>
            <h3>6.1. Token Distribution</h3>
            <ul>
                <li><strong>Total Supply</strong>: 100,000,000,000 Softcoins (SFT)</li>
                <li><strong>Initial Distribution</strong>: 48% to community (Mining and Rewards), 12% to development team, 10% to Treasury, 4% to partners, 10% to shareholders, 10% for marketing, and 6% for KOLs.</li>
            </ul>
            
            <h3>6.2. Use of Fundings and Investments</h3>
            <ul>
                <li><strong>Development</strong>: 40%</li>
                <li><strong>Marketing</strong>: 25%</li>
                <li><strong>Partnerships and Collaborations</strong>: 15%</li>
                <li><strong>Legal and Compliance</strong>: 10%</li>
                <li><strong>Operational Expenses</strong>: 10%</li>
            </ul>
        </div>

        <div className="section">
            <h2>7. Roadmap</h2>
            <h3>Q4 2024 to Q3 2025</h3>
            <p>- Mining and Airdrops</p>
            <p>- Community building and awareness campaigns</p>
            
            <h3>Q4 2025</h3>
            <p>- Token Generation Event</p>
            <p>- Mainnet Launch</p>
            
            <h3>Q4 2025</h3>
            <p>- Integration of smart contracts</p>
            <p>- Partnerships with businesses and developers</p>
            
            <h3>Q4 2025</h3>
            <p>- Expansion of ecosystem</p>
            <p>- Introduction of staking rewards</p>
        </div>

        <div className="section">
            <h2>8. Team</h2>
            <p>Softcoin is developed by a team of experienced professionals in blockchain technology, cryptography, and finance. Our team members have a proven track record of delivering innovative solutions in the technology and financial sectors.</p>
        </div>

        <div className="section">
            <h2>9. Legal Disclaimer</h2>
            <p>This whitepaper is for informational purposes only and does not constitute an offer to sell or a solicitation of an offer to buy any securities. The information provided is subject to change without notice.</p>
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default Whitepaper;
