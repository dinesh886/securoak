import React from 'react';
import './Whypartner.scss'; // Ensure you have the updated styles
import Header from "../../components/header/header";
const Whypartner = () => {
  
  return (
    <>
    <Header identityPage={true} />
    <div className="why-partner mt-5">
      <h1>Why Partner with Us?</h1>
      <p>
        At Securoak, we are dedicated to being your trusted partner in navigating the complexities of digital identity transformation. Together, we will unlock new possibilities for your organization’s success in the ever-evolving digital landscape.
      </p>

      <div className="benefits">
        {[
          {
            icon: 'fas fa-handshake',
            title: 'Industry Expertise',
            description:
              'Our team comprises recognized leaders in digital identity transformation, ensuring you receive top-tier guidance and support throughout your journey.',
          },
          {
            icon: 'fas fa-chart-line',
            title: 'Tailored Solutions',
            description:
              'We craft personalized strategies that address your unique challenges, unlocking opportunities for growth and innovation.',
          },
          {
            icon: 'fas fa-shield-alt',
            title: 'Comprehensive Approach',
            description:
              'Our holistic strategy covers every aspect of identity management, from authentication to compliance, ensuring your organization is secure and resilient.',
          },
          {
            icon: 'fas fa-lock',
            title: 'Proven Results',
            description:
              'We focus on delivering measurable outcomes that drive business value, empowering you to thrive in the digital landscape.',
          },
          {
            icon: 'fas fa-cogs',
            title: 'Long-Term Partnership',
            description:
              'Our commitment to your success extends beyond implementation, with ongoing support and collaboration to ensure your identity management solutions remain effective and relevant.',
          },
        ].map((benefit, index) => (
          <div className="benefit" key={index}>
            <i className={`${benefit.icon} icon`} />
            <h2>{benefit.title}</h2>
            <p>{benefit.description}</p>
          </div>
        ))}
      </div>

      <h2>Unlocking Business Potential</h2>
      <div className="unlock-benefits">
        {[
          {
            icon: 'fas fa-bullseye', // Icon for Personalized Solutions
            title: 'Personalized Solutions',
            description:
              'Tailored identity management strategies that align with your organization’s unique objectives and challenges, unlocking new opportunities for growth.',
          },
          {
            icon: 'fas fa-user-shield', // Icon for Robust Authentication
            title: 'Robust Authentication',
            description:
              'Advanced authentication methods, including multi-factor authentication (MFA) and biometric verification, enhance security and protect sensitive information, enabling trust and confidence in your operations.',
          },
          {
            icon: 'fas fa-plug', // Icon for Seamless Integration
            title: 'Seamless Integration',
            description:
              'Effortless integration with existing systems streamlines processes, improving efficiency and unlocking the potential for increased productivity.',
          },
          {
            icon: 'fas fa-laptop', // Icon for User-Friendly Design
            title: 'User-Friendly Design',
            description:
              'Intuitive interfaces and self-service options simplify identity management, empowering users and fostering greater engagement within your organization.',
          },
          {
            icon: 'fas fa-file-contract', // Icon for Compliance Support
            title: 'Compliance Support',
            description:
              'Guidance in navigating regulatory requirements and adhering to industry standards ensures secure and compliant identity management practices, mitigating risks and unlocking peace of mind.',
          },
          {
            icon: 'fas fa-headset', // Icon for Ongoing Support and Monitoring
            title: 'Ongoing Support and Monitoring',
            description:
              'Continuous support and proactive monitoring address emerging security challenges, ensuring your identity management system remains effective and unlocking long-term success.',
          },
        ].map((unlockBenefit, index) => (
          <div className="unlock-benefit-card" key={index}>
            <i className={`${unlockBenefit.icon} icon`} />
            <h3>{unlockBenefit.title}</h3>
            <p>{unlockBenefit.description}</p>
          </div>
        ))}
      </div>

      <div className="call-to-action">
        <h2>Ready to take the next step?</h2>
        <a href="/contact" className="cta-button">Contact Us</a>
      </div>
    </div>
    </>
  );
};

export default Whypartner;
