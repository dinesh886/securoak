import React from "react";
import "./api.scss";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import one from "../../assests/api/supportservice.jpg";
import { Link } from 'react-router-dom';

export default function Api() {
  return (
    <section className="managed-support-services">
      <Container>
        <Row className="align-items-center">
          <Col md={6}>
            <div className="image-container">
              <img src={one} alt="Managed Support Services" className="large-image" />
            </div>
          </Col>
          <Col md={6}>
            <div className="text-content">
              <h2 className="heding">Managed Support Services</h2>
              <p>
                Securoak’s Managed Support Services provide 24/7 technology support from a skilled team of engineers, ensuring optimal operational efficiency and system reliability. Our tailored solutions, proactive issue resolution, and seamless integration empower your organization, allowing you to focus on strategic initiatives and growth while minimizing downtime and enhancing user satisfaction.
              </p>
              <Link to="" className="know-more-button">
              Know More <i className="fa-solid fa-arrow-right"></i>
            </Link>
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
}
