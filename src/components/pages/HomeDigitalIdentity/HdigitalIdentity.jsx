import React from 'react';
import './hdigitalIdentity.scss';
import digitalIdentityImage from "../HomeDigitalIdentity/digitalidentity.jpg";
import { Link } from 'react-router-dom';

const HdigitalIdentity = () => {
  return (
    <section className="digital-identity-section" aria-labelledby="digital-identity-heading">
      <div className="container">
        <div className="content-wrapper">
          <img src={digitalIdentityImage} alt="Digital Identity Transformation" className="section-image" />
          <div className="text-content">
            <h2 className="section-title" id="digital-identity-heading">
              Digital Identity Transformation Program
            </h2>
            <p className="section-description">
              The Securoak Digital Identity Transformation Program helps organizations modernize their identity management systems, enhancing security while providing users seamless access to essential services.
            </p>
            <p className="section-content">
              By integrating advanced authentication methods, businesses can safeguard critical data, streamline operations, and deliver superior customer experiences. This transformation improves operational efficiency, drives innovation, and enables sustainable growth, equipping organizations to thrive in the competitive digital landscape.
            </p>
            <Link to="" className="know-more-button">
              Know More <i className="fa-solid fa-arrow-right"></i>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}

export default HdigitalIdentity;
