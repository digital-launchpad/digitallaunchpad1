import React, { useEffect } from 'react';
import Nav from './components/Nav/nav';
import Home from './components/Home/home';
import About from './components/About/about';
import Contact from './components/Contact/contact';
import Footer from './components/Footer/footer';
import Projects from './components/Projects/projects';
import Services from './components/Services/services'


// 1. Import Lenis & GSAP ScrollTrigger Core Engine
import Lenis from '@studio-freight/lenis';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

// Registering standard navigation anchors
gsap.registerPlugin(ScrollTrigger);

function App() {
  
  useEffect(() => {
    // 2. Initialize Lenis Smooth Scroll Setup
    const lenis = new Lenis({
      duration: 1.2,          // Speed of scroll element animation (higher means smoother)
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)), // Premium smooth cubic easing function
      direction: 'vertical',  // Vertical orientation scroll mapping
      gestureDirection: 'vertical',
      smooth: true,
      mouseMultiplier: 1,
      smoothTouch: false      // Keeps native touch dynamics responsive on mobile devices
    });

    // 3. Connect Lenis Raf Frame Loops With GSAP ScrollTrigger
    function raf(time) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }
    requestAnimationFrame(raf);

    // 4. Synchronize ScrollTrigger recalculations automatically on scroll ticks
    lenis.on('scroll', ScrollTrigger.update);

    gsap.ticker.add((time) => {
      lenis.raf(time * 1000);
    });

    gsap.ticker.lagSmoothing(0);

    // Cleanup process on unmount activity
    return () => {
      lenis.destroy();
      gsap.ticker.remove(lenis.raf);
    };
  }, []);

  return (
    <div className="App">
      <Nav />
      <Home />
      <Services/>
      <Projects/>
      <Contact />
      <About />
      <Footer />
    </div>
  );
}

export default App;