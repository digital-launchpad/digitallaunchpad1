import React, { useEffect } from 'react';
import './home.css';
import { TypeAnimation } from 'react-type-animation';
import { FaWhatsapp, FaArrowUpRightFromSquare } from "react-icons/fa6";
import heroImg from '../../assets/heroImage.png';
import { Link } from 'react-scroll';

// 1. GSAP Imports
import { gsap } from 'gsap';

function Home() {

  useEffect(() => {
    // Entrance Timeline Animation
    const tl = gsap.timeline({ defaults: { ease: 'power3.out' } });

    tl.fromTo('.hero-badge-tag', { opacity: 0, y: -20 }, { opacity: 1, y: 0, duration: 0.6, delay: 0.2 })
      .fromTo('.hero-main-title', { opacity: 0, y: 30 }, { opacity: 1, y: 0, duration: 0.8 }, '-=0.4')
      .fromTo('.hero-description', { opacity: 0, y: 20 }, { opacity: 1, y: 0, duration: 0.6 }, '-=0.4')
      .fromTo('.cta-btn', { opacity: 0, scale: 0.9 }, { opacity: 1, scale: 1, duration: 0.5, stagger: 0.15 }, '-=0.3')
      .fromTo('.hero-laptop-image', { opacity: 0, x: 50, scale: 0.95 }, { opacity: 1, x: 0, scale: 1, duration: 1 }, '-=0.6');
  }, []);

  return (
    <section className="home-hero-section" id="home">
      <div className="hero-grid-container">
        <div className="hero-text-block">
          <div className="hero-badge-tag">
            <span>We Launch...</span> <div className="pulse-dot"></div>
          </div>
          
          <h1 className="hero-main-title">
            Digital solutions & <br />
            <span className="typing-text-wrapper">
              <TypeAnimation
                sequence={['Websites.', 2000, 'Mobile Applications.', 2000, 'UI/UX Designs.', 2000]}
                speed={50}
                repeat={Infinity}
              />
            </span>
          </h1>
          
          <p className="hero-description">
            <span className="accent-text">Ready to launch?</span> We transform your innovative ideas into powerful, high-converting mobile apps and cutting-edge web experiences.
          </p>
          
          <div className="hero-cta-group">
            <Link to="contact" spy={true} smooth={true} duration={500} offset={-80} className="cta-btn btn-primary">
              Get FREE Consultation <FaArrowUpRightFromSquare size={14} />
            </Link>
            <a href="https://wa.me/91XXXXXXXXXX" target="_blank" rel="noreferrer" className="cta-btn btn-whatsapp">
              <FaWhatsapp size={18} /> Chat on Whatsapp
            </a>
          </div>
        </div>

        <div className="hero-hero-visual-block">
          <div className="radial-glow-orb"></div>
          <div className="graphic-wrapper">
            <img src={heroImg} alt="Digital Development Visual" className="hero-laptop-image" />
          </div>
        </div>
      </div>
    </section>
  );
}

export default Home;