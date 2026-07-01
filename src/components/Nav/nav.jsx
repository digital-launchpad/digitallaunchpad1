import React, { useState, useEffect, useRef } from 'react';
import './nav.css';
import logoImg from '../../assets/logoImg.png';
import { Link } from 'react-scroll';

function Nav() {
  const [scrolled, setScrolled] = useState(false);
  const menuRef = useRef();
  const mobileRef = useRef();

  // Scroll depth detector for dynamic sticky header glass border
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleMobileMenu = () => {
    if (mobileRef.current && menuRef.current) {
      mobileRef.current.classList.toggle("activemobile");
      menuRef.current.classList.toggle("activeham");
    }
  };

  const closeMobileMenu = () => {
    if (mobileRef.current && menuRef.current) {
      mobileRef.current.classList.remove("activemobile");
      menuRef.current.classList.remove("activeham");
    }
  };

  return (
    <nav className={`navbar-header ${scrolled ? 'nav-scrolled' : ''}`}>
      <div className="nav-wrapper">
        
        {/* LOGO CONTAINER */}
        <div className="logo-container" onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}>
          <img src={logoImg} alt="Digital Launchpad Logo" className="nav-logo" />
        </div>

        {/* DESKTOP METRO LINKS PANEL */}
        <ul className="desktopmenu">
          <li>
            <Link to="home" spy={true} smooth={true} duration={500} offset={-80} activeClass="active">Home</Link>
          </li>
          <li>
            <Link to="services" spy={true} smooth={true} duration={500} offset={-80} activeClass="active">Services</Link>
          </li>
          <li>
            <Link to="projects" spy={true} smooth={true} duration={500} offset={-80} activeClass="active">Projects</Link>
          </li>
          <li>
            <Link to="contact" spy={true} smooth={true} duration={500} offset={-80} activeClass="active">Contact Us</Link>
          </li>
          <li>
            <Link to="about" spy={true} smooth={true} duration={500} offset={-80} activeClass="active">About Us</Link>
          </li>
        </ul>

        {/* MOBILE HAMBURGER MECHANICS */}
        <div className="hamburger" ref={menuRef} onClick={toggleMobileMenu}>
          <div className="ham"></div>
          <div className="ham"></div>
          <div className="ham"></div>
        </div>

        {/* FLOATING MOBILE SLIDER OVERLAY */}
        <ul className="mobilemenu" ref={mobileRef}>
          <li>
            <Link to="home" spy={true} smooth={true} duration={500} offset={-80} activeClass="active" onClick={closeMobileMenu}>Home</Link>
          </li>
          <li>
            <Link to="services" spy={true} smooth={true} duration={500} offset={-80} activeClass="active" onClick={closeMobileMenu}>Services</Link>
          </li>
          <li>
            <Link to="projects" spy={true} smooth={true} duration={500} offset={-80} activeClass="active" onClick={closeMobileMenu}>Projects</Link>
          </li>
          <li>
            <Link to="contact" spy={true} smooth={true} duration={500} offset={-80} activeClass="active" onClick={closeMobileMenu}>Contact</Link>
          </li>
          <li>
            <Link to="about" spy={true} smooth={true} duration={500} offset={-80} activeClass="active" onClick={closeMobileMenu}>About Us</Link>
          </li>
        </ul>

      </div>
    </nav>
  );
}

export default Nav;