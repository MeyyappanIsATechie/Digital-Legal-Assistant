import React from 'react';
import { Link } from 'react-router-dom';

const HomePage = () => {
  return (
    <div>
      {/* Navigation Bar */}
      <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <div className="container">
          <Link className="navbar-brand" to="/">Home</Link>
          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav">
              <li className="nav-item">
                <Link className="nav-link" to="/chat">Chat with Legal Assistant</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/find-lawyers">Find Lawyers</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/my-profile">My Profile</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/community-forum">Community Forum</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/contact-us">Contact Us</Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>

      {/* Content Section */}
      <div className="content-section">
        <article>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit...</p>
        </article>
      </div>
    </div>
  );
};

export default HomePage;
