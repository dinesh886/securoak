import React from 'react';
import './WhoWeAre.scss'; // SCSS styling for the component
import largeImage from './whoweare2.jpg'; // Import the image file

const WhoWeAre = () => {
  return (
    <section className="who-we-are">
      <div className="content-wrapper">
        <div className="text-content">
          <h1>Who We Are</h1>
          <p>
            Securoak leads in advanced digital security, blending AI and expert-driven solutions to tackle complex cybersecurity
            and infrastructure challenges. Our services in Identity and Access Management, application integration, and managed
            IT drive performance, resilience, and compliance—enabling organizations to innovate securely.
          </p>
          <p>
            With tailored API development and end-to-end support through our Network and Security Operations Centers, Securoak
            enhances agility, mitigates risk, and empowers your business to thrive in today’s digital landscape.
          </p>
        </div>
        <div className="image-container">
          <img src={largeImage} alt="Who We Are" />
        </div>
      </div>
    </section>
  );
};

export default WhoWeAre;
