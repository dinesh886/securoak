import React from 'react';
import './WhyWeStandOut.scss'; // SCSS styling for the component
import { FaShieldAlt, FaUsers, FaSyncAlt, FaLock } from 'react-icons/fa'; // Example icons from Font Awesome

const WhyWeStandOut = () => {
  return (
    <section className="why-we-stand-out">
      <h2>Why We Stand Out</h2>
      <p className="intro">
        Securoak distinguishes itself through AI-powered cybersecurity and robust IT solutions, specializing in secure identity 
        management, seamless application integration, and resilient infrastructure. Backed by expert teams and strategic 
        partnerships, we prioritize client-centered innovation, operational efficiency, and proactive risk management.
      </p>
      <div className="features-grid">
        <div className="feature">
          <FaShieldAlt className="icon" />
          <h3>AI-Powered Cybersecurity</h3>
          <p>Advanced AI solutions to detect, prevent, and respond to security threats in real-time.</p>
        </div>
        <div className="feature">
          <FaUsers className="icon" />
          <h3>Expert Team Support</h3>
          <p>Highly skilled teams providing strategic advice and hands-on support for secure operations.</p>
        </div>
        <div className="feature">
          <FaSyncAlt className="icon" />
          <h3>Seamless Integration</h3>
          <p>Effortless integration with existing systems to ensure smooth and continuous functionality.</p>
        </div>
        <div className="feature">
          <FaLock className="icon" />
          <h3>Identity Management</h3>
          <p>Comprehensive identity and access management to enhance security and control.</p>
        </div>
      </div>
    </section>
  );
};

export default WhyWeStandOut;
