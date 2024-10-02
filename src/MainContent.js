import React, { useState, useEffect } from 'react';
import './App.css'; // If necessary, import the shared CSS

function MainContent() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  useEffect(() => {
    let texts = [
      'Explore<br>The Future of<br>Cryptocurrency<span>?</span>',
      'Earn Passive <br>Income Up To <br>$500 Daily<span>?</span>',
      'Become a <br>Millionaire When<br>We List<span>?</span>'
    ];
    let index = 0;

    function changeText() {
      const mainText = document.getElementById('main-text');
      if (mainText) {
        mainText.innerHTML = `<span class="typing-animation">${texts[index]}</span>`;
        index = (index + 1) % texts.length;
      }
    }

    const intervalId = setInterval(changeText, 5000);
    changeText(); // Initial call to display the first text immediately

    return () => {
      clearInterval(intervalId); // Cleanup interval on component unmount
    };
  }, []);
  
  // Function to open the modal
  const handleRegisterClick = () => {
    setIsModalOpen(true);
  };

  // Function to close the modal
  const closeModal = () => {
    setIsModalOpen(false);
  };

  return (
    <div className="main-content">
      <div className="contents">
        <h2>Are you ready to</h2>
        <div id="poster">
          <h3 id="main-text">
            <span className="typing-animation">Explore<br/>The Future of<br/>Cryptocurrency<span>?</span></span>
          </h3>
          <div className="image">
            <img src="transparent-logo2/9.png" alt="Explore the Future of Cryptocurrency" />
          </div>
        </div>
        {/* Replace the direct link with the modal trigger */}
        <button onClick={handleRegisterClick} className="register-button">Start Mining</button>
      </div>

      <div className="section" id="faster">
        <div id="main">
          <h2>Our Vision & Mission</h2>
          <p>Our vision is to develop a cryptocurrency that is accessible, secure, and efficient, facilitating seamless transactions for users globally. To further this mission, we are distributing 50% of the total token supply at no cost to users who actively contribute to bringing this vision to life.</p>
          <p>The token can be mined and earned through our <a href="https://app.softcoin.world">Web App</a> and <a href="https://t.me/SoftcoinAppBot?start">Telegram Mini App</a>. These platforms provide participants with the opportunity to accumulate the token in advance of the official listing date, allowing early supporters to maximize their holdings before public trading begins.</p>
          <p>Softcoin is set to launch on its proprietary blockchain, integrating a decentralized autonomous organization (DAO) protocol. This advanced infrastructure empowers the token to establish a self-sustaining ecosystem within the cryptocurrency space, driving scalability and fostering a dynamic growth trajectory in both value and purchasing power.</p>
        </div>
        <div className="mage">
          <img src="okay/vision.png" alt="Explore the Future of Cryptocurrency" />
        </div>
      </div>
      <div>
        
      </div>
      <section className="explanation-section">
        <h3 style={{ width: '80%', textAlign: 'center'}}>How is Softcoin Different From Other Crypto Airdrop Projects?</h3>
        <div className="keypoint">
            <span class="material-symbols-outlined">edit_road</span>
            <h3>Clear & Precise Roadmap</h3>
            <p>We lauched this project with a vivid and completly feasible Roadmap, to avoid any uncertainty that will lead to the dissapointment of the community.</p>
        </div>
        <div className="keypoint">
            <span className="material-symbols-outlined">support_agent</span>
            <h3>Reliable User Support</h3>
            <p>Our Team is ever ready to provide assistance with any challenges you might encounter.</p>
        </div>
        <div className="keypoint">
            <span className="material-symbols-outlined">thumb_up</span>
            <h3>Easy To Use</h3>
            <p>The process of Mining and Earning on Softcoin is specifically made to be easy and user friendly.</p>
        </div>
    </section>
            <section className="explanation-section">
          {/* Replace the direct link with the modal trigger */}
        <button style={{ marginBottom: '50px'}} onClick={handleRegisterClick} className="register-button">Start Mining</button>
        </section>
        <section className="explanation-section best">
  <div className="maybe">
  <p><strong>Total Supply: </strong>100,000,000,000 Softcoins (SFT)</p>
  <p><strong>Initial Distribution: </strong>48% to community (Airdrop), 12% to development team, 10% to Treasury, 4% to partners, 10% to shareholders, 10% for marketing, and 6% for KOLs.</p>
  </div>
  <div className="mage">
  <img style={{ boxShadow: '0px -20px 40px rgba(135,224,254,0.495)'}} src="iconns/Tokenomics.png" alt="tokenomics"/>
  </div>
        </section>
    <div className="just">
        <h3 style={{ textAlign: 'center', color: 'white'}}>Want More? Here is more!</h3>
      <div className="section">

            <img src="okay/everyday.png" alt="Benefits of Softcoin"/>
            <h2>100% Community Oriented</h2>
            <p>Softcoin is created mainly for the benefit of it's community, and this is why 50% of the token supply will be distributed to the community.</p>
        </div>
    <div className="section">

            <img src="okay/developer.png" alt="Benefits of Softcoin" />
            <h2>Encourage More Development</h2>
            <p>Softcoin will support smart ​contracts, enabling ​developers to create ​decentralized applications ​(dApps) on the platform. ​These contracts will be executed ​automatically when ​predefined conditions are ​met.</p>
        </div>
    <div className="section">

            <img src="okay/decentralized.png" alt="Benefits of Softcoin"/>
            <h2>Decentralized Blockchain Technology</h2>
            <p>Softcoin will operate on a ​decentralized blockchain, ​ensuring transparency and ​security. The blockchain will ​be optimized for speed and ​efficiency, using advanced ​cryptographic techniques to ​secure transactions.</p>
        </div>
        </div>

        <div className="norm">
           <p>Read extensively about the core value, mission statement and technical overview of the project in our <a style={{ color: '#48e4fa'}} href="/whitepaper">Whitepaper</a>.</p>
            <p>Join us today and let us embark on this journey to re-invent the cryptocurrency industry ​through innovations and creativity together.</p>
            {/* Replace the direct link with the modal trigger */}
        <button onClick={handleRegisterClick} className="register-button">Start Mining</button>
        </div>
        {/* Modal */}
      {isModalOpen && (
        <div className="modal-overlay">
          <div className="modal">
            <h3>Select Platform</h3>
            <button onClick={closeModal} className="close-modal"><i className="fas fa-close"></i></button>
            <div className="modal-buttons">
              <a href="https://app.softcoin.world" className="modal-button">WEB APP</a>
              <a href="https://t.me/SoftcoinAppBot?start" className="modal-button">TELEGRAM MINI APP</a>
            </div>
          </div>
        </div>
      )}
</div>
    
  );
}

export default MainContent;
