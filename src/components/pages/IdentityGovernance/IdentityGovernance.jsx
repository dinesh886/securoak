import React from 'react';
import './identityGovernance.scss'; // Ensure this file is created/updated
import governanceImage from '../IdentityGovernance/identitygovernance.jpg'; // Update the path to your image
import privilage from '../IdentityGovernance/privillagedacess.jpg';

const IdentityGovernance = () => {
  const cardsData = [
    {
      title: "Identity Governance (IG)",
      content: "Securoak’s Identity Governance solutions improve security and compliance by providing clear visibility into access permissions. We use automated policies and expert partnerships to simplify identity management, reduce risks, and help organizations protect sensitive data while staying efficient and compliant.",
      image: governanceImage,
    },
    {
        title: "Privileged Access Management (PAM)",
        content: "Securoak’s Privileged Access Management (PAM) solutions boost security by managing access to critical IT systems. We offer customized strategies for easy credential management, real-time threat detection, and compliance, all while integrating smoothly with your existing systems. Partnering with us helps protect sensitive data and optimize privileged access.",
        image: privilage ,
      },
    // Repeat the above structure for 3 more cards with different images/content
  ];

  return (
    <section className="identity-governance-section" aria-labelledby="ig-heading">
      <div className="container">
        <h2 className="section-title" id="ig-heading">Identity Governance Solutions</h2>
        <div className="cards-wrapper">
          {cardsData.map((card, index) => (
            <div className="card" key={index}>
              <img src={card.image} alt={card.title} className="card-image" />
              <h3 className="card-title">{card.title}</h3>
              <p className="card-content">{card.content}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default IdentityGovernance;
