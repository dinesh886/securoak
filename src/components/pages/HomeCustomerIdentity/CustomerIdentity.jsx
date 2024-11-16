import React from 'react';
import './customerIdentity.scss'; // Ensure this file is created/updated
import customer from "../HomeCustomerIdentity/customeridentity.jpg";
import { Link } from 'react-router-dom';

const CustomerIdentity = () => {
  return (
    <section className="customer-identity-section" aria-labelledby="ciam-heading">
      <div className="container">
      
        <div className="content-wrapper">
          <div className="text-content">
          <h2 className="section-title" id="ciam-heading">
          Customer Identity and Access Management (CIAM)
        </h2>
            <p className="section-description">
              Securoak's Customer Identity and Access Management (CIAM) solutions empower organizations to manage user data securely while enhancing customer experiences.
            </p>
            <p className="section-content">
              By delivering consistent, compliant interactions across platforms, we build trust and loyalty. Our approach integrates robust authentication, intuitive design, and seamless integration, enabling businesses to achieve growth and operational efficiency in a dynamic digital landscape.
            </p>
            <Link to="" className="know-more-button">
              Know More <i className="fa-solid fa-arrow-right"></i>
            </Link>
          </div>
          <img src={customer} alt="Customer Identity" className="section-image" />
        </div>
      </div>
    </section>
  );
}

export default CustomerIdentity;
