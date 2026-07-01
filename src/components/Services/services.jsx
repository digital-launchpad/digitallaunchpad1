import React from "react";
import './services.css';
import { MdCurrencyRupee } from "react-icons/md";
import { LiaRocketSolid } from "react-icons/lia";
import { FaLaptopCode, FaLayerGroup, FaFigma, FaUserTie } from "react-icons/fa6";
import { FaMobileScreenButton, FaGooglePlay, FaAppStoreIos, FaSliders } from "react-icons/fa6";


function Services() {
   return(
        <div className="services">
            <div className="serviceHeading">
                Our Services
            </div>
            <div className="webDev">
                <h1 id="heading1">Web Development</h1>
                <div className="cards">
                    <div className="card">
                        <div className="cardHeader">
                            <h1 className="service-card"><FaLaptopCode /> Single Page</h1>
                            {/* <p className="priceTag"><MdCurrencyRupee />8000/-</p> */}
                        </div>
                        <div className="cardBody">
                            <p>
                                Perfect for local businesses wanting to establish their brand online quickly. 
                                We build seamless, single-page websites that help you get discovered and grow effortlessly.
                            </p>
                        </div>
                        <div className="cardFooter">
                            <p>✓ Fully Responsive Design.</p>
                            <p>✓ SEO-Friendly Structure.</p>
                            <p>✓ Budget-Friendly Solution.</p>
                        </div>
                    </div> 
                    <div className="card">
                        <div className="cardHeader">
                            <h1 className="service-card"><FaLayerGroup />Multi-Page UI Website</h1>
                            {/* <p className="priceTag"><MdCurrencyRupee />8000/-</p> */}
                        </div>
                        <div className="cardBody">
                            <p>
                              Perfect for businesses needing dedicated pages for their services, team, and contact info. We build structured, highly-interactive, and multi-page frontend websites.
                            </p>
                        </div>
                        <div className="cardFooter">
                            <p>✓ Smooth Page Transitions.</p>
                            <p>✓ Modern UI/UX Layout.</p>
                            <p>✓ Fully Responsive & Mobile-Friendly.</p>
                        </div>
                    </div>
                    <div className="card">
                        <div className="cardHeader">
                            <h1 className="service-card"><FaFigma />Figma / Design to Code</h1>
                            {/* <p className="priceTag"><MdCurrencyRupee />8000/-</p> */}
                        </div>
                        <div className="cardBody">
                            <p>
                              Already have a design? We convert your Figma, Adobe XD, or Sketch designs into clean, semantic, and production-ready HTML/CSS/JS or React code.
                            </p>
                        </div>
                        <div className="cardFooter">
                            <p>✓ 100% Exact Match to Design..</p>
                            <p>✓ Cross-Browser Compatibility.</p>
                        </div>
                    </div>
                    <div className="card">
                        <div className="cardHeader">
                            <h1 className="service-card"><FaUserTie />Personal Portfolio Website</h1>
                            {/* <p className="priceTag"><MdCurrencyRupee />8000/-</p> */}
                        </div>
                        <div className="cardBody">
                            <p>
                             Showcase your work, skills, and resume in style. We build stunning personal portfolio websites for freelancers, artists, and professionals to help you stand out.
                            </p>
                        </div>
                        <div className="cardFooter">
                            <p>✓ Creative & Eye-Catching Animations.</p>
                            <p>✓ Integrated Resume Download Option.</p>
                            <p>✓ Fully Responsive & Mobile-Friendly.</p>
                        </div>
                    </div>
                </div>
            </div>
            <div className="webDev">
                <h1 id="heading1">App Development</h1>
                <div className="cards">
                    <div className="card">
                        <div className="cardHeader">
                            <h1 className="service-card"><FaMobileScreenButton className="stat-icon"/> Native & Cross-Platform</h1>
                            {/* <p className="priceTag"><MdCurrencyRupee />8000/-</p> */}
                        </div>
                        <div className="cardBody">
                            <p>
                                Build high-performance, responsive mobile apps tailored for both iOS and Android from a single codebase. We engineering smooth interfaces that keep your users engaged effortlessly.
                            </p>
                        </div>
                        <div className="cardFooter">
                            <p>✓ Flutter & React Native Experts.</p>
                            <p>✓ High-Performance & Fast Core.</p>
                            <p>✓ Native Look and Feel Integration.</p>
                        </div>
                    </div> 
                    <div className="card">
                        <div className="cardHeader">
                            <h1 className="service-card"><FaGooglePlay className="stat-icon"/>App/Play Store Deployment</h1>
                            {/* <p className="priceTag"><MdCurrencyRupee />8000/-</p> */}
                        </div>
                        <div className="cardBody">
                            <p>
                              Taking care of the entire submission pipeline. We handle app store guidelines, assets configuration, testing criteria, and seamless deployment to Google Play Store and Apple App Store.
                            </p>
                        </div>
                        <div className="cardFooter">
                            <p>✓ 100% Policy-Compliant Setup.</p>
                            <p>✓ Testing & Core Review Setup.</p>
                            <p>✓ Analytics & Tracking Integrated.</p>
                        </div>
                    </div>
                    <div className="card">
                        <div className="cardHeader">
                            <h1 className="service-card"><FaAppStoreIos className="stat-icon"/>Figma to Mobile App</h1>
                            {/* <p className="priceTag"><MdCurrencyRupee />8000/-</p> */}
                        </div>
                        <div className="cardBody">
                            <p>
                             Transform your mobile UI prototypes into fully functional native apps. We maintain pixel-perfect layout precision, complex micro-interactions, and fluid mobile transitions.
                            </p>
                        </div>
                        <div className="cardFooter">
                            <p>✓ Pixel-Perfect Layout Fidelity.</p>
                            <p>✓ Smooth Component Micro-Animations.</p>
                            <p>✓ Clean & Scalable Codebase.</p>
                        </div>
                    </div>
                    <div className="card">
                        <div className="cardHeader">
                            <h1 className="service-card"><FaSliders className="stat-icon"/>Custom MVP Development</h1>
                            {/* <p className="priceTag"><MdCurrencyRupee />8000/-</p> */}
                        </div>
                        <div className="cardBody">
                            <p>
                             Launch your software startup idea rapidly with a Minimum Viable Product (MVP). Designed specifically to validate your concepts, scale quickly, and hook initial target consumers.
                            </p>
                        </div>
                        <div className="cardFooter">
                            <p>✓ Rapid Functional Deployment.</p>
                            <p>✓ Cost-Effective Architecture.</p>
                            <p>✓ Scalable & Modular Foundation.</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
   )
}

export default Services;