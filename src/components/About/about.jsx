import React, { useEffect } from 'react';
import './about.css';
import { FaCode, FaPalette, FaRocket } from "react-icons/fa6";

// GSAP Integration & ScrollTrigger Core Plugins
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

// Registering ScrollTrigger plugin for cross-browser scroll interaction
gsap.registerPlugin(ScrollTrigger);

function About() {

  useEffect(() => {
    // 1. Animation timeline for the main text elements layout
    const textTimeline = gsap.timeline({ defaults: { ease: 'power3.out' } });
    
    textTimeline.fromTo('.about-tagline', { opacity: 0, y: -15 }, { opacity: 1, y: 0, duration: 0.5, delay: 0.1 })
                .fromTo('.aboutHeading', { opacity: 0, y: 20 }, { opacity: 1, y: 0, duration: 0.6 }, '-=0.3')
                .fromTo('.about-paragraph', { opacity: 0, y: 15 }, { opacity: 1, y: 0, duration: 0.5, stagger: 0.2 }, '-=0.3');

    // 2. Scroll-triggered animation for the feature statistic blocks
    gsap.fromTo('.stat-card', 
      { opacity: 0, y: 40 },
      { 
        opacity: 1, 
        y: 0, 
        duration: 0.6, 
        stagger: 0.2,
        scrollTrigger: {
          trigger: '.about-hero-stats',
          start: 'top 80%', // Triggers animation when the top of the block hits 80% screen depth
          toggleActions: 'play none none none'
        }
      }
    );

    // 3. Scroll-triggered animation for the team profile skeleton cards
    gsap.fromTo('.team-profile-card', 
      { opacity: 0, scale: 0.9, y: 30 },
      { 
        opacity: 1, 
        scale: 1,
        y: 0, 
        duration: 0.7, 
        stagger: 0.2,
        scrollTrigger: {
          trigger: '.team-grid',
          start: 'top 85%',
          toggleActions: 'play none none none'
        }
      }
    );
  }, []);

  return (
    <div className="about-section" id="about">
      
      {/* 1. HERO INFRASTRUCTURE: SPLIT BANNER GRID */}
      <div className="about-hero-container">
        
        {/* Left Side Content Segment */}
        <div className="about-hero-text">
          <span className="about-tagline">Who We Are</span>
          <h2 className="aboutHeading">The Trio Behind The Tech</h2>
          <p className="about-paragraph highlight-p">
            We are a tight-knit trio of developers and designers dedicated to crafting exceptional digital experiences. 
            What started as shared brainstorming sessions and a mutual obsession with technology has naturally 
            evolved into <strong>Digital Launchpad</strong>—our independent collaborative workspace.
          </p>
          <p className="about-paragraph">
            Backed by a strong foundation in computer applications and modern frameworks, we combine clean, 
            scalable code with cutting-edge UI/UX aesthetics to build products that look stunning and function flawlessly. 
            We bridge the gap between complex functionality and user-friendly design.
          </p>
        </div>

        {/* Right Side Visual Graphic Statistics Grid */}
        <div className="about-hero-stats">
          <div className="stat-card">
            <FaCode className="stat-icon" />
            <h3>Clean Code</h3>
            <p>Scalable & Optimized Frameworks</p>
          </div>
          
          <div className="stat-card">
            <FaPalette className="stat-icon" />
            <h3>UI/UX Aesthetics</h3>
            <p>Stunning & High-Converting Layouts</p>
          </div>
          
          <div className="stat-card animate-glow">
            <FaRocket className="stat-icon special-color" />
            <h3>100% Direct</h3>
            <p>Zero Middlemen, Rapid Delivery</p>
          </div>
        </div>
        
      </div>

      {/* 2. CORE MISSION TEXT BLOCK */}
      <div className="about-mission-panel">
        <p>
          At Digital Launchpad, we specialize in designing high-converting websites and engineering fast, 
          responsive mobile applications tailored specifically to your goals. Because we work directly as a core 
          team of creators without any corporate middlemen, we ensure 100% transparency, direct communication, 
          and rapid project delivery. From the very first wireframe to the final deployment, we are fully committed 
          to launching your digital success story.
        </p>
      </div>

      {/* 3. TEAM MEMBERS SECTION PROFILE GRID */}
      <div className="team-section-container">
        <h3 className="team-section-title">Meet The Trio</h3>
        <div className="team-grid">
          
          {/* Core Member Slot 1 */}
          <div className="team-profile-card">
            <div className="profile-img-placeholder">
              <span>Member 1</span>
            </div>
            <div className="profile-info">
              <h4>Your Name</h4>
              <p>Full Stack Developer</p>
            </div>
          </div>

          {/* Core Member Slot 2 */}
          <div className="team-profile-card">
            <div className="profile-img-placeholder">
              <span>Member 2</span>
            </div>
            <div className="profile-info">
              <h4>Partner Name</h4>
              <p>UI/UX Designer</p>
            </div>
          </div>

          {/* Core Member Slot 3 */}
          <div className="team-profile-card">
            <div className="profile-img-placeholder">
              <span>Member 3</span>
            </div>
            <div className="profile-info">
              <h4>Partner Name</h4>
              <p>Frontend Engineer</p>
            </div>
          </div>

        </div>
      </div>

    </div>
  );
}

export default About;