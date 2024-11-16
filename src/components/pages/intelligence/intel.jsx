                                                                  import React from "react";
import "./intel.scss";
import { Link } from 'react-router-dom';

import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

import intel_images from "../../assests/intel.jpg";
import { FaArrowRightLong } from "react-icons/fa6";

export default function Intel() {
  return (
    <section className="intel_service">
      <Container>
        <Row className="align-items-center">
          <Col md={6} className="no_pad">
            <div className="intel_image">
              <img
                src={intel_images}
                alt="Proactive Threat Intelligence services"
                title="Proactive Threat Intelligence services"
              />
            </div>
          </Col>
          <Col md={6}>
            <div className="intel_cnt">
              {/* <h2 className="title">Identity Access Management</h2> */}
              <h3 className="heading">
              Workforce Identity and Access Management (WIAM)
              </h3>
              <p className="cnt">
              Workforce Identity and Access Management (WIAM) ensures your employees have the right access to the right resources at the right time, all while maintaining robust security standards. It's like providing secure access to a vault—only those with the correct credentials can enter, and only when it's necessary. Streamline access management and enhance security across your workforce with WIAM.
              </p>

              <div className="three_areas">
                <div className="one">
                  <h4 className="titles"><b>Tailored Access Control : </b>
                   Designed for managing employee access, ensuring internal systems are only accessible to authorized personnel </h4>
                  
                </div>
                <div className="two">
                  <h4 className="titles"><b>Self-Service Capabilities: </b>  Empowers employees with secure self-service options, allowing them to request and manage their access efficiently.</h4>
                  
                </div>
                {/* <div className="three">
                  <h4 className="titles"><b>Scalability and Security: </b> While CIAM scales for large numbers of customers, WIAM focuses on controlled, high-security access for your internal teams, keeping sensitive company data safe.</h4>
                 
                </div> */}
              </div>

             
              <Link
  to="/identity-access-management" // Updated to use Link
  aria-label="Learn more about our threat intelligence services"
  className="ser-learn3 btn-primary3"
  onClick={(e) => {
    setTimeout(() => {
      const element = document.getElementById("identify"); // Make sure the ID matches
      if (element) {
        element.scrollIntoView({ behavior: "smooth" });
      }
    }, 0);
  }}
>
  Know more
  <span className="arrow_right">
    <FaArrowRightLong aria-hidden="true" />
  </span>
</Link>
             
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
}
