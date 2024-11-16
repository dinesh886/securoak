import React from 'react';
import './ClientTestimonial.scss';

const ClientTestimonial = () => {
  return (
    <section className="client-testimonial">
      <h2>Client Testimonial</h2>
      <div className="testimonial-content">
        <div className="story">
          <h3>Success Story: Securing 60,000+ Identities with Saviynt</h3>
          <p><strong>Client Overview:</strong></p>
          <p>A leading organization, managing over 60,000 identities across various sectors, faced significant challenges in streamlining its identity governance and administration processes. To enhance security and compliance, they sought a robust solution to manage customer authentication and internal workforce access effectively.</p>
          
          <p><strong>Challenge:</strong></p>
          <p>The client was grappling with outdated Identity Management technologies and complex governance workflows, which hindered their ability to efficiently control access to critical resources. The organization needed a comprehensive solution to mitigate cybersecurity risks, improve operational efficiency, and ensure compliance with industry standards.</p>

          <p><strong>Solution:</strong></p>
          <p>Securoak partnered with the client to implement the Saviynt Identity Governance & Administration (IGA) solution. Our team focused on:</p>
          <ul>
            <li>Project Management Excellence</li>
            <li>Tailored Implementation</li>
            <li>Technical Expertise</li>
          </ul>

          <p><strong>Results:</strong></p>
          <ul>
            <li>Enhanced Security</li>
            <li>Operational Efficiency</li>
            <li>User Satisfaction</li>
          </ul>
        </div>
        
        <div className="testimonial">
          <blockquote>
            "I am immensely satisfied with the collaboration with Securoak. Their expertise, commitment, and support throughout the project have been invaluable. Together, we have transformed our identity governance framework, and I wholeheartedly recommend them for any future projects."
          </blockquote>
          <p><strong>David Fiorina</strong>, Head of Cyber Security, Bunnings</p>
        </div>
      </div>

      <div className="summary">
        <p>In Summary: Through our strategic partnership, Securoak empowered the client to secure their identities effectively and enhance their governance framework, laying the foundation for a more secure and compliant future.</p>
      </div>
    </section>
  );
};

export default ClientTestimonial;
