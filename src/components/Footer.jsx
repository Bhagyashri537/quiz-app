// Footer.js
import React from 'react';
import './Footer.css'; // Assuming you have a CSS file for styling

function Footer() {
  return (
    <footer className="footer">
      <div className="footer-content">
        <div className="footer-left">
          <h2>QuizMaster</h2>
          <p>Your ultimate quiz destination</p>
          <div className="contact-info">
            <p>Email: support@quizmaster.com</p>
            <p>Phone: (123) 456-7890</p>
          </div>
        </div>
        <div className="footer-center">
          <h3>Follow Us</h3>
          <div className="social-media">
            <a href="https://facebook.com" target="_blank" rel="noopener noreferrer">
              <img src="/icons/facebook.svg" alt="Facebook" />
            </a>
            <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">
              <img src="/icons/twitter.svg" alt="Twitter" />
            </a>
            <a href="https://instagram.com" target="_blank" rel="noopener noreferrer">
              <img src="/icons/instagram.svg" alt="Instagram" />
            </a>
          </div>
        </div>
        <div className="footer-right">
          <h3>Quick Links</h3>
          <ul>
            <li><a href="/about">About Us</a></li>
            <li><a href="/contact">Contact</a></li>
            <li><a href="/privacy">Privacy Policy</a></li>
            <li><a href="/terms">Terms of Service</a></li>
          </ul>
        </div>
      </div>
      <div className="footer-bottom">
        <p>&copy; {new Date().getFullYear()} QuizMaster. All rights reserved.</p>
      </div>
    </footer>
  );
}

export default Footer;
