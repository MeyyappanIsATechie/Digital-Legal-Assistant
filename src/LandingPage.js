import React from 'react';
import './LandingPage.css';

const LandingPage = ({ handleUserClick }) => {
  return (
    <div className="landing-page">
      <header className="header">
        <div className="header-left">
          {/*logo*/}
        </div>
        <div className="header-right">
          <h1>Digital Legal Assistant</h1>
        </div>
      </header>
      <div className="content">
        <div className="box" onClick={handleUserClick}>
          {/*user logo*/}
          <p>User</p>
        </div>
        <div className="box">
          {/*admin logo*/}
          <p>Admin</p>
        </div>
        <div className="box">
          {/*legal expert logo*/}
          <p>Legal Expert</p>
        </div>
      </div>
    </div>
  );
};

export default LandingPage;
