import React from 'react';
import './footer.css';
import { FaLinkedinIn, FaGithub, FaInstagram, FaEnvelope, FaLocationDot } from "react-icons/fa6";

function Footer() {
  const currentYear = new Date().getFullYear();

  const handleScrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="footer-section">
      <div className="footer-container">
        
        {/* BLOCK 1: BRAND LOGO & BIO */}
        <div className="footer-brand-block">
          <div className="footer-logo">
            DIGITAL <span>LAUNCHPAD</span>
          </div>
          <p className="footer-bio">
            Accelerating digital growth through cutting-edge design, optimized engineering, and direct client collaboration. Let's launch your next big idea.
          </p>
          <div className="footer-socials">
            <a href="https://linkedin.com" target="_blank" rel="noreferrer" aria-label="LinkedIn"><FaLinkedinIn /></a>
            <a href="https://github.com" target="_blank" rel="noreferrer" aria-label="GitHub"><FaGithub /></a>
            <a href="https://www.instagram.com/digital_launch_pad_/?hl=en" target="_blank" rel="noreferrer" aria-label="Instagram"><FaInstagram /></a>
          </div>
        </div>

        {/* BLOCK 2: QUICK LINK NAVIGATION */}
        <div className="footer-links-block">
          <h4>Quick Links</h4>
          <ul>
            <li><a href="#home" onClick={handleScrollToTop}>Home</a></li>
            <li><a href="#services">Services</a></li>
            <li><a href="#projects">Projects</a></li>
            <li><a href="#contact">Contact Us</a></li>
            <li><a href="#about">About Us</a></li>
          </ul>
        </div>

        {/* BLOCK 3: QUICK CONTACT META */}
        <div className="footer-contact-block">
          <h4>Get In Touch</h4>
          <div className="footer-contact-item">
            <FaEnvelope />
            <p>contact.digitallaunchpad@gmail.com</p>
          </div>
          <div className="footer-contact-item">
            <FaLocationDot />
            <p>Rajasthan, India</p>
          </div>
        </div>

      </div>

      {/* BOTTOM BASEBAR: COPYRIGHTS & BACK-TO-TOP */}
      <div className="footer-basebar">
        <p>&copy; {currentYear} Digital Launchpad. All Rights Reserved.</p>
        <button onClick={handleScrollToTop} className="scroll-top-btn" aria-label="Scroll to top">
          Back to Top &uarr;
        </button>
      </div>
    </footer>
  );
}

export default Footer;