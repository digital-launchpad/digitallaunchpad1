import React, { useState, useEffect } from 'react';
import './contact.css';
import { FaPaperPlane, FaEnvelope, FaLocationDot, FaClock } from "react-icons/fa6";

function Contact() {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [status, setStatus] = useState("");
  const [canSubmit, setCanSubmit] = useState(true);

  useEffect(() => {
    const lastSubmitTime = localStorage.getItem('digital_launchpad_submit_time');
    if (lastSubmitTime) {
      const hoursPassed = (new Date() - new Date(lastSubmitTime)) / (1000 * 60 * 60);
      if (hoursPassed < 24) {
        setCanSubmit(false);
        setStatus("You can only send one message every 24 hours. 🚫");
      }
    }
  }, []);

  useEffect(() => {
    if (canSubmit && !window.grecaptcha) {
      const script = document.createElement('script');
      script.src = "https://www.google.com/recaptcha/api.js";
      script.async = true;
      script.defer = true;
      document.head.appendChild(script);
    }
  }, [canSubmit]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!canSubmit) return;

    const captchaResponse = window.grecaptcha ? window.grecaptcha.getResponse() : "";
    if (!captchaResponse) {
      setStatus("Please verify the Captcha first! 🤖");
      return;
    }

    setStatus("Sending your message...");

    const dataToSubmit = {
      name: formData.name,
      email: formData.email,
      message: formData.message,
      access_key: import.meta.env.VITE_WEB3FORMS_KEY
    };

    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json"
        },
        body: JSON.stringify(dataToSubmit)
      });

      const result = await response.json();

      if (result.success) {
        setStatus("Message Sent Successfully! ✅");
        setFormData({ name: '', email: '', message: '' }); 
        if (window.grecaptcha) window.grecaptcha.reset();
        localStorage.setItem('digital_launchpad_submit_time', new Date().toString());
        setCanSubmit(false);
      } else {
        console.log("Web3Forms API Error:", result);
        setStatus("Submission failed. Please check your config! ❌");
      }
    } catch (error) {
      console.error("Network Error:", error);
      setStatus("Network error. Please try again! ❌");
    }
  };

  return (
    <div className="contact-section" id="contact">
      <h2 className="contactHeading">Get In Touch</h2>
      
      <div className="contact-container">
        
        {/* LEFT PANEL: INFORMATION META */}
        <div className="contact-info-block">
          <h1 id="contactSubHeading">Let's build something epic together.</h1>
          <p className="contact-desc">
            Have an idea or a project in mind? Drop us a line! We are ready to transform your visions into high-performing digital realities.
          </p>
          
          <div className="info-meta-list">
            <div className="meta-item">
              <FaEnvelope />
              <div>
                <span>Email Us</span>
                <p>contact.digitallaunchpad@gmail.com</p>
              </div>
            </div>
            <div className="meta-item">
              <FaLocationDot />
              <div>
                <span>Based In</span>
                <p>Rajasthan, India</p>
              </div>
            </div>
            {/* RESPONSE TIME */}
            <div className="meta-item response-time-badge">
              <FaClock />
              <div>
                <span>Response Time</span>
                <p>Within 24 Hours Fastback</p>
              </div>
            </div>
          </div>
        </div>

        {/* RIGHT PANEL: FORM */}
        <div className="contact-form-holder">
          <form onSubmit={handleSubmit} className="glass-form">
            
            <input type="text" name="_gotcha" style={{ display: 'none' }} />

            <div className="input-group">
              <input 
                type="text" required placeholder="Your Name" value={formData.name} disabled={!canSubmit}
                onChange={(e) => setFormData({...formData, name: e.target.value})}
              />
            </div>

            <div className="input-group">
              <input 
                type="email" required placeholder="Your Email" value={formData.email} disabled={!canSubmit}
                onChange={(e) => setFormData({...formData, email: e.target.value})}
              />
            </div>

            <div className="input-group">
              <textarea 
                rows="5" required placeholder="Tell us about your project..." value={formData.message} disabled={!canSubmit}
                onChange={(e) => setFormData({...formData, message: e.target.value})}
              ></textarea>
            </div>

            {canSubmit && (
              <div 
                className="g-recaptcha" 
                data-sitekey={import.meta.env.VITE_GOOGLE_CAPTCHA_KEY}
              ></div>
            )}
            
            <button type="submit" disabled={!canSubmit} className="submit-btn">
              {canSubmit ? "Send Message" : "Locked for Today"} <FaPaperPlane size={14} />
            </button>

            {status && (
              <p className={`status-message ${status.includes('Successfully') || status.includes('Sending') ? 'success' : 'error'}`}>
                {status}
              </p>
            )}

          </form>
        </div>

      </div>
    </div>
  );
}

export default Contact;